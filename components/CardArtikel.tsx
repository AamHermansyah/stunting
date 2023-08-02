import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type typeProps = {
  textDescriptionSize?: 'small' | 'normal' | undefined
}

function CardArtikel({ textDescriptionSize }: typeProps) {
  const descriptionClassName = textDescriptionSize === 'small' ? '' : 'sm:text-base'

  return (
    <div className="mb-4 sm:mb-8">
      <Link href="/artikel/1" className="relative block w-full aspect-video rounded bg-gray-100 mb-1 overflow-hidden">
        <Image
          src="/article-1.jpg" 
          alt="hero" 
          fill={true} 
          className="object-cover" 
        />
      </Link>
      <div>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <div className="relative w-10 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
            <Image
              src="/vercel.svg" 
              alt="logo" 
              fill={true} 
              className="object-contain" 
            />
          </div>
          <div>
            <span className="block font-bold text-xs sm:text-sm text-gray-600">
              Aam Hermansyah
            </span>
            <span className="block text-xs sm:text-sm text-gray-400">
              Senin, 12 Juli 2023 08:23
            </span>
          </div>
        </div>
        <Link href="/artikel/1" className="block font-bold sm:text-lg mb-1 hover:text-primary transition">
          Cara mencegah balita yang terkena obesitas
        </Link>
        <p className={cn('text-sm text-gray-500 text-justify', descriptionClassName)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde dolores possimus veritatis. Ex harum doloribus deleniti similique sint voluptatibus.
        </p>
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span className="block py-1 px-2 rounded border border-primary text-xs">
            Gizi
          </span>
          <span className="block py-1 px-2 rounded border border-primary text-xs">
            Tips & Trick
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardArtikel