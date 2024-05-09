import { auth } from '@/auth'
import PuskesmasSection from '@/components/pages/puskesmas/PuskesmasSection'
import React from 'react'

async function PuskesmasPage() {
  const session = await auth();

  return (
    <PuskesmasSection user={session?.user!} />
  )
}

export default PuskesmasPage