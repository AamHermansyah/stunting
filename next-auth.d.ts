import { Role } from "@prisma/client"
import NextAuth, { type DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      role: Role;
    } & DefaultSession["user"]
  }
}

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
    role?: Role;
  }
}
