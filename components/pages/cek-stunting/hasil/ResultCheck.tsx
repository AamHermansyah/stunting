import { Button } from '@/components/ui/button'
import React from 'react'

function ResultCheck() {
  return (
    <div className="max-w-md rounded-lg mx-auto px-6 sm:px-10 py-8 bg-primary text-white">
      <h1 className="text-center uppercase text-xl sm:text-2xl font-bold">Hasil Pemeriksaan</h1>
      <ul className="mt-4 space-y-2">
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Nama</span>
          :
          <span>Aam Hermansyah</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Tanggal Lahir</span>
          :
          <span>03 Maret 2010</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Kecamatan</span>
          :
          <span>Kahuripan</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Jenis Kelamin</span>
          :
          <span>Laki laki</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Berat Badan</span>
          :
          <span>20kg</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Tinggi Badan</span>
          :
          <span>40cm</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Lingkar Kepala</span>
          :
          <span>20cm</span>
        </li>
        <li className="text-sm sm:text-base flex items-start gap-4">
          <span className="font-bold w-[105px] sm:w-[120px]">Status</span>
          :
          <span className="p-1 rounded bg-red-500 text-sm">Obesitas</span>
        </li>
      </ul>
      <div className="text-center mt-6">
        <Button href="/cek-stunting" className="bg-white text-primary hover:bg-gray-100">
          Cek Ulang
        </Button>
      </div>
    </div>
  )
}

export default ResultCheck