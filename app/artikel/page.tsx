import { auth } from '@/auth';
import ArticleSection from '@/components/pages/artikel/ArticleSection'
import React from 'react'

async function ArticlePage() {
  const session = await auth();

  return (
    <ArticleSection user={session?.user!} />
  )
}

export default ArticlePage