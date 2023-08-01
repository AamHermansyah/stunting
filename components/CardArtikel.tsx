import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type typeProps = {
  textDescriptionSize?: 'small' | 'normal' | undefined
}

function CardArtikel({ textDescriptionSize }: typeProps) {

  const descriptionClassName = textDescriptionSize === 'small' ? '' : 'sm:text-base'

  return (
    <div className="mb-4 sm:mb-8">
      <Link href="/artikel/1" className="block w-full aspect-video rounded bg-gray-100 mb-1" />
      <div>
        <span className="text-xs sm:text-sm text-gray-400">Senin, 12 Juli 2023 08:23</span>
        <Link href="/artikel/1" className="block font-bold sm:text-lg mb-1 hover:text-primary transition">
          Cara mencegah balita yang terkena obesitas
        </Link>
        <p className={cn('text-sm text-gray-500 text-justify', descriptionClassName)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde dolores possimus veritatis. Ex harum doloribus deleniti similique sint voluptatibus.
        </p>
      </div>
    </div>
  )
}

export default CardArtikel