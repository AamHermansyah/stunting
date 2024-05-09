import { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast';
import CardArtikel from '../CardArtikel';
import { ImSpinner6 } from 'react-icons/im';
import { FaFaceSadCry } from 'react-icons/fa6';
import { Article } from '@/index.types';

type PropTypes = {
  category: string;
  id: number;
}

function RelatedArticles({ category, id }: PropTypes) {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);

    fetch(`/api/article?category=${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 500) {
          toast({
            title: 'Error!',
            description: 'Artikel gagal diunggah. Coba beberapa saat lagi!',
            variant: 'destructive'
          });
          return;
        }

        setArticles((res.data as Article[]).filter((article) => article.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        toast({
          title: 'Error',
          description: (error as Error).message,
          variant: 'destructive'
        });
      })
  }, []);

  if (articles === null && !loading) return null;

  return (
    <div className="mt-10 sm:mt-20">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Artikel terkait
      </h1>
      {articles !== null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {articles.map((item) => (
            <CardArtikel data={item} key={item.id} />
          ))}
        </div>
      )}

      {loading && (
        <div className="py-20">
          <ImSpinner6 fontSize={24} className="mx-auto animate-spin text-primary" />
        </div>
      )}

      {articles?.length === 0 && !loading && (
        <div className="py-10 space-y-10">
          <FaFaceSadCry fontSize={70} className="mx-auto text-gray-500" />
          <p className="text-center">Artikel terkait tidak ditemukan!</p>
        </div>
      )}
    </div>
  )
}

export default RelatedArticles