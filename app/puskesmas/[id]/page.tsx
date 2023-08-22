'use client'

import BackButton from '@/components/BackButton'
import Reviews from '@/components/layout/Reviews'
import Description from '@/components/pages/puskesmas/Description'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsTelegram } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { RiWhatsappFill } from 'react-icons/ri'

function page() {
  return (
    <div>
      <BackButton />
      <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/puskesmas-1.jpg" 
          alt="puskesmas" 
          fill={true} 
          className="object-cover" 
        />
        <div className="absolute top-4 sm:top-auto sm:bottom-4 right-4 z-10">
          <div className="flex items-center gap-2 text-2xl">
            <Link href="" className="rounded-full p-2 bg-white hover:text-primary transition">
              <AiFillInstagram />
            </Link>
            <Link href="" className="rounded-full p-2 bg-white hover:text-primary transition">
              <BsFacebook />
            </Link>
            <Link href="" className="rounded-full p-2 bg-white hover:text-primary transition">
              <AiFillTwitterCircle />
            </Link>
            <Link href="" className="rounded-full p-2 bg-white hover:text-primary transition">
              <BsTelegram />
            </Link>
            <Link href="" className="rounded-full p-2 bg-white hover:text-primary transition">
              <RiWhatsappFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -top-14 space-y-2">
        <div className="flex justify-between items-end">
          <div className="ml-4 sm:ml-10 relative w-28 sm:w-32 aspect-square rounded-full border-[6px] sm:border-[8px] border-white bg-gray-100 overflow-hidden">
            <Image
              src="/vercel.svg" 
              alt="logo" 
              fill={true} 
              className="object-contain" 
            />
          </div>
          <Button>Mulai Konsultasi</Button>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary">
          UPTD Puskesmas Tanjungjaya
        </h1>
        <span className="flex text-sm gap-2 text-gray-500">
          <IoLocationSharp fontSize={24} /> J6G7+W57, Jl. Perintis Kemerdekaan, Karsamenak, Kec. Kawalu, Kab. Tasikmalaya, Jawa Barat 46151
        </span>
        <div className="pt-4">
          <Description />
          <Reviews/>
        </div>
      </div>
    </div>
  )
}

export default page