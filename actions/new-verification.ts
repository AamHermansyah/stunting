'use server'

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-user"
import { prisma } from "@/db";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'Token tidak ditemukan!' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token telah kadaluarsa!' }
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'User tidak ditemukan!' }
  }

  await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingUser.email
    }
  });

  await prisma.verificationToken.delete({
    where: { id: existingToken.id }
  });

  return { success: 'Verifikasi telah berhasil! Sedang mengalihkan...' }
}