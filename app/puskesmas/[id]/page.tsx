'use client'

import BackButton from '@/components/BackButton'
import GoogleMaps from '@/components/core/GoogleMaps'
import Reviews from '@/components/layout/Reviews'
import Description from '@/components/pages/puskesmas/Description'
import ShowImages from '@/components/pages/puskesmas/ShowImages'
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
      {/* <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
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
      </div> */}
      <ShowImages />
      <div className="relative -top-14 space-y-2 z-[1]">
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
        <div className="pt-4 md:pt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            UPTD Puskesmas Tanjungjaya
          </h1>
          <span className="flex text-sm gap-2 text-gray-500">
            <IoLocationSharp fontSize={24} /> J6G7+W57, Jl. Perintis Kemerdekaan, Karsamenak, Kec. Kawalu, Kab. Tasikmalaya, Jawa Barat 46151
          </span>
        </div>
        <div className="pt-4">
          {/* <Description /> */}
          <div className="bg-gradient-to-tr from-primary to-sky-500 rounded p-4 max-w-sm">
            <div className="w-full flex items-center gap-4">
              <div className="relative w-20 aspect-square rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src="/next.svg"
                  alt="logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
              <div className="col-span-2">
                <span className="text-white font-bold text-sm">Terdapat</span>
                <h3 className="text-white font-bold">
                  <span className="inline-block text-4xl">10</span> Tenaga Ahli Gizi
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="text-xl font-semibold py-2">Deskripsi</h1>
          <div id="article-detail">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, iure aspernatur culpa in ullam fuga. Similique libero magnam hic nam quam, magni debitis aliquam iusto velit quis totam eaque nisi architecto et dolorum. Dolorem similique consectetur assumenda laborum harum porro tempora voluptate quae labore neque aspernatur eum, corrupti nesciunt quis quibusdam? Mollitia illo itaque doloremque fugiat qui doloribus provident esse quisquam! Veniam omnis, commodi recusandae vel corporis fuga itaque adipisci nostrum tenetur, laborum sequi veritatis voluptas est aliquam. Laudantium assumenda autem cupiditate error accusamus officiis quas minus, exercitationem impedit odio quos commodi laboriosam quibusdam obcaecati aliquid, suscipit iure, ipsa molestiae.
            </p>
          </div>
          <Reviews />
        </div>
        <div className="py-10">
          <h1 className="text-xl font-semibold py-2">Lokasi Puskesmas</h1>
          <GoogleMaps
            source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63313.96231398091!2d108.18588351009035!3d-7.340121593184194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5765cfb5162d%3A0x5be7817d0bc37d42!2sPuskesmas%20Kahuripan!5e0!3m2!1sid!2sid!4v1692709215462!5m2!1sid!2sid"
          />
        </div>
      </div>
    </div>
  )
}

export default page