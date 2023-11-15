'use client'

import CardArtikel from '@/components/CardArtikel'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { artikelKategoriList } from '@/constants'
import { useEffect, useState } from 'react'
import { Article, PageInfo } from './index.types'
import { FaFaceSadCry } from 'react-icons/fa6'
import { ImSpinner6 } from 'react-icons/im'

function ArticlePage() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setLoading(true);

    fetch('/api/article', {
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

        setArticles(res.data);
        setPageInfo(res.pageInfo);
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

  return (
    <div className="py-4">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h4 className="text-2xl font-bold">Artikel Terbaru</h4>
        <Button href="/artikel/add" className="inline-flex gap-2 items-center">
          Tambah Artikel
        </Button>
      </div>
      <div className="my-2 max-w-2xl grid grid-cols-1 sm:grid-cols-4 gap-x-4 gap-y-2">
        <div className="sm:col-span-2">
          <Input placeholder="Cari disini..." name="search" />
        </div>
        <div className="sm:col-span-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent className="max-h-[160px]">
              <SelectGroup>
                <SelectLabel>Kategori</SelectLabel>
                {artikelKategoriList.map((item) => (
                  <SelectItem
                    value={item.value}
                    key={item.id}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

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

      {articles?.length === 0 && (
        <div className="py-20 space-y-10">
          <FaFaceSadCry fontSize={70} className="mx-auto text-gray-500" />
          <p className="text-center">Artikel tidak ditemukan!</p>
        </div>
      )}

      {pageInfo && !pageInfo?.isLastData && (
        <div className="text-center">
          <div className="inline-flex mt-10 gap-2">
            <Button className="inline-flex gap-2 items-center">
              Load More
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticlePage