import { Button } from '@/components/ui/button'
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'

function CardPuskesmas() {
  return (
    <div className="border rounded overflow-hidden">
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
        <Image
          src="/puskesmas-1.jpg" 
          alt="hero" 
          fill={true} 
          className="object-cover" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Puskesmas Kawalu</h2>
        <span className="flex text-sm gap-2 text-gray-500">
          <IoLocationSharp fontSize={24} /> Gang Delima RT/RW 02/05, Desa Sukamaju, Kawalu
        </span>
        <div className="w-full flex justify-end items-center gap-1 font-bold text-yellow-400 mt-2">
          <AiFillStar fontSize={24} />
          <span className="text-gray-700">4.3</span>
        </div>
        <div>
          <Button className="w-full mt-4">
            Mulai Konsultasi
          </Button>
          <Button href="/puskesmas/1" variant="outline" className="w-full mt-2">
            Detail
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardPuskesmas