'use client'

import BackButton from '@/components/BackButton'
import CardArtikel from '@/components/CardArtikel'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Article } from '../index.types'
import { HTMLRenderer } from '@/components/core/HTMLRenderer'
import { ImSpinner6 } from 'react-icons/im'
import RelatedArticles from '@/components/layout/RelatedArticles'
import { formatCreatedAt } from '@/lib/utils'

function ArticleDetail() {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams();
  const navigate = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    fetch(`/api/article/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setArticle(res.data);
          return;
        }

        toast({
          title: `Error ${res.status}`,
          description: res.message,
          variant: 'destructive'
        });

        setTimeout(() => {
          navigate.push('/artikel');
        }, 1000);
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: (error as Error).message,
          variant: 'destructive'
        });
      })
  }, []);

  return (
    <div>
      <BackButton />
      {article === null && (
        <div className="py-20">
          <ImSpinner6 fontSize={24} className="mx-auto animate-spin text-primary" />
          <p className="mt-4 text-center">Artikel sedang dimuat! Tunggu sebentar...</p>
        </div>
      )}
      {article !== null && (
        <div>
          <div className="border-b-2 pb-4">
            <h1 className="text-2xl sm:text-4xl font-bold">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 mb-2">
              <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={article.alt_image}
                  fill={true}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-bold text-sm sm:text-lg text-gray-600">
                  Admin
                </span>
                <span className="block text-xs sm:text-base text-gray-400">
                  {formatCreatedAt(article.created_at)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                <b>Gambar</b> <span className="italic">{article.alt_image}</span>
              </p>
            </div>

            <div id="article-detail">
              <HTMLRenderer htmlString={article.content} className="py-4" />
            </div>

            <div>
              <h4 className="font-bold">Tag:</h4>
              <div className="flex flex-wrap gap-2 items-center mt-2 text-xs sm:text-base">
                {article.tags.split(',').map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="block py-1 px-2 rounded bg-primary text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {article?.category && (
        <RelatedArticles category={article.category} id={article.id} />
      )}
    </div>
  )
}

export default ArticleDetail