import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from '@/auth.config'
import { prisma } from "./db"
import { getUserById } from "./data/user"
import jwt from 'jsonwebtoken'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/login'
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  callbacks: {
    async signIn({ user, account }) {
      if (!user?.id) return false;
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }

        if (token.role) {
          session.user.role = token.role;
        }

        if (token.token) {
          session.user.token = token.token;
        }
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // Create and sign a JWT token
      const tokenJWT = jwt.sign({ userId: existingUser.id }, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string, {
        expiresIn: '7h', // You can adjust the expiration time as needed
      });

      token.role = existingUser.role;
      token.token = tokenJWT;

      return token
    },
  },
  ...authConfig,
})