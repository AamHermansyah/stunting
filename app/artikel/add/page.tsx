import { auth } from '@/auth'
import FormAddArticle from '@/components/pages/artikel/FormAddArticle'
import React from 'react'

async function AddArticlePage() {
  const session = await auth();

  return (
    <FormAddArticle token={session?.user!.token || ''} />
  )
}

export default AddArticlePage