'use client'

import BackButton from '@/components/BackButton'
import CardArtikel from '@/components/CardArtikel'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      <BackButton />
      <div className="border-b-2 pb-4">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Pentingnya Gizi yang Baik untuk Pertumbuhan Optimal Balita
        </h1>
        <div className="flex items-center gap-4 mt-4 mb-2">
          <div className="relative w-16 sm:w-20 aspect-square rounded-full border-2 bg-gray-100 overflow-hidden">
            <Image
              src="/vercel.svg" 
              alt="logo" 
              fill={true} 
              className="object-contain" 
            />
          </div>
          <div>
            <span className="block font-bold text-sm sm:text-lg text-gray-600">
              Aam Hermansyah
            </span>
            <span className="block text-xs sm:text-base text-gray-400">
              Senin, 12 Juli 2023 08:23
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <div className="relative w-full aspect-video rounded-md bg-gray-100 overflow-hidden">
            <Image
              src="/article-1.jpg" 
              alt="article" 
              fill={true} 
              className="object-cover" 
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            <b>Gambar 1</b> <span className="italic">Gambar susu kotak</span>
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Sebuah Pembukaan</h3>
          <p className="text-gray-600 text-justify">
            Sejak lahir hingga usia lima tahun, periode pertumbuhan balita adalah fase kritis dalam kehidupan mereka. Pada masa ini, gizi yang baik memainkan peran yang sangat penting untuk memastikan pertumbuhan dan perkembangan yang optimal. Memberikan asupan nutrisi yang tepat pada balita tidak hanya memberi mereka energi untuk beraktivitas, tetapi juga membangun fondasi kesehatan jangka panjang. Dalam artikel ini, kita akan menjelajahi pentingnya gizi yang baik untuk pertumbuhan optimal balita dan bagaimana memenuhi kebutuhan gizi mereka dengan tepat.
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Gizi yang Baik untuk Pertumbuhan Fisik yang Sehat</h3>
          <p className="text-gray-600 text-justify">
            Setiap orang tua ingin melihat anaknya tumbuh tinggi, kuat, dan sehat. Nutrisi yang tepat adalah kunci untuk mencapai pertumbuhan fisik yang optimal pada balita. Protein, karbohidrat, lemak, vitamin, dan mineral adalah komponen penting dalam membangun dan memperbaiki jaringan tubuh, membentuk tulang yang kuat, serta mengembangkan otot dan organ yang sehat. Dengan memastikan balita mendapatkan asupan nutrisi yang cukup dari berbagai sumber makanan, kita dapat memastikan pertumbuhan mereka berjalan dengan baik
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Gizi yang Baik untuk Perkembangan Otak yang Optimal</h3>
          <p className="text-gray-600 text-justify">
            Selain pertumbuhan fisik, perkembangan otak juga merupakan hal yang kritis pada masa balita. Nutrisi yang tepat diperlukan untuk memastikan otak balita berkembang secara optimal. Asam lemak omega-3, yang dapat ditemukan dalam ikan, kacang-kacangan, dan biji-bijian, memainkan peran penting dalam pembentukan sel-sel otak dan transmisi sinyal saraf. Selain itu, zat besi adalah nutrisi yang penting untuk membantu transportasi oksigen ke otak. Dengan memberikan makanan yang kaya akan omega-3 dan zat besi kepada balita, kita dapat mendukung perkembangan kognitif mereka dan memfasilitasi kemampuan belajar yang optimal
          </p>
        </div>
        <div className="mt-4 mb-6 space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">Membangun Pola Makan Sehat yang Seimbang</h3>
          <p className="text-gray-600 text-justify">
            Membangun pola makan sehat yang seimbang adalah langkah penting dalam memenuhi kebutuhan gizi balita secara menyeluruh. Porsi makan yang seimbang dari kelompok makanan utama, seperti karbohidrat, protein, lemak, sayuran, dan buah-buahan, harus diperhatikan. Memberikan variasi makanan membantu memenuhi kebutuhan nutrisi yang beragam dan menghindari kekurangan gizi. Penting juga untuk memastikan balita mendapatkan asupan buah dan sayuran yang bervariasi, karena mengandung vitamin, mineral, serat, dan antioksidan penting. Selain itu, menghindari makanan olahan dan gula berlebihan juga merupakan bagian penting dari pola makan sehat balita.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Tag:</h4>
          <div className="flex flex-wrap gap-2 items-center mt-2 text-xs sm:text-base">
            <span className="block py-1 px-2 rounded bg-primary text-white">
              Gizi
            </span>
            <span className="block py-1 px-2 rounded bg-primary text-white">
              Tips & Trick
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Artikel terkait
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {[1, 2, 3, 4].map((item) => (
            <CardArtikel textDescriptionSize="small" key={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page