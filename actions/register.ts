'use server'

import z from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '@/db';

import { registerSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const {
    name,
    password,
    email,
    dateOfBirth,
    address,
    district,
    numberOfChildren,
  } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email telah digunakan. Coba lagi!' }
  }

  const [year, month, day] = dateOfBirth.split("-");

  await prisma.user.create({
    data: {
      password: hashedPassword,
      email,
      name,
      address,
      dateOfBirth: new Date(+year, +month - 1, +day),
      district,
      numberOfChildren: +numberOfChildren,
      image: ''
    }
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token,
    name
  );

  return { success: 'Konfirmasi email telah dikirim!' }
}