import React from 'react'

function page() {
  return (
    <div className="py-10">
      <div className="max-w-md rounded-lg mx-auto px-6 sm:px-10 py-8 sm:py-10 bg-primary text-white">
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
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="mt-10">
          <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
            Keterangan
          </h1>
          <div className="text-gray-600">
            <div className="font-bold mt-3 flex items-center gap-3">
              Status Gizi Balita:
              <span className="p-1 rounded bg-red-500 text-white font-normal">Obesitas</span>
            </div>
            <p className="mt-1 text-justify">
              Anak Anda tergolong dalam kategori obesitas. Obesitas adalah kondisi ketika pertumbuhan anak terhambat dan tinggi badan tidak mencapai tingkat yang sesuai dengan usianya. Kondisi ini dapat mempengaruhi kesehatan dan perkembangan balita secara keseluruhan. Penting untuk segera mengambil tindakan untuk mencegah dampak jangka panjang dari obesitas ini.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
            Apa itu stunting?
          </h1>
          <div className="text-gray-600 space-y-3">
            <p className="mt-2 text-justify">
              Stunting adalah kondisi ketika pertumbuhan balita terhambat sehingga tinggi badan tidak sesuai dengan usianya. Hal ini biasanya terjadi pada usia anak di bawah lima tahun, yaitu masa-masa penting dalam pertumbuhan dan perkembangan fisik maupun kognitif. Stunting dapat disebabkan oleh berbagai faktor, termasuk asupan gizi yang kurang, infeksi berulang, dan lingkungan yang tidak sehat.
            </p>
            <div>
              <h4 className="text-lg font-bold text-gray-700">Faktor Penyebab Stunting:</h4>
              <ul className="list-decimal pl-4 sm:pl-8 text-justify">
                <li>Kurangnya asupan nutrisi, terutama protein, zat besi, dan vitamin A.</li>
                <li>Pola makan yang tidak sehat, termasuk kurangnya variasi makanan bergizi.</li>
                <li>Gangguan kesehatan yang berulang, seperti diare dan infeksi saluran pernapasan atas.</li>
                <li>Akses terbatas terhadap layanan kesehatan dan perawatan medis.</li>
                <li>Kondisi sanitasi dan kebersihan yang buruk.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
            Saran dan Tindakan Selanjutnya
          </h1>
          <div className="text-gray-600 mt-2 space-y-3 text-justify">
            <h4 className="text-lg font-bold text-gray-700">
              Apa yang Harus Dilakukan Jika Balita Terdiagnosis Stunting?
            </h4>
            <ul className="list-decimal pl-4 sm:pl-8 space-y-2">
              <li>
                <h6 className="font-bold">Konsultasi dengan Dokter atau Spesialis Gizi:</h6>
                <p>
                  Segera temui dokter atau ahli gizi untuk menilai kondisi kesehatan dan pertumbuhan balita secara lebih mendalam. Mereka akan memberikan penanganan dan rencana perawatan yang sesuai dengan kebutuhan anak Anda.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Perhatikan Pola Makan Sehat:</h6>
                <p>
                  Pastikan anak mendapatkan asupan nutrisi yang cukup dan seimbang. Berikan makanan yang kaya akan protein, karbohidrat, lemak sehat, serta vitamin dan mineral penting untuk pertumbuhan.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Tingkatkan Konsumsi Sayuran dan Buah-buahan:</h6>
                <p>
                  Perbanyak pemberian sayuran dan buah-buahan yang kaya akan serat dan nutrisi, serta membantu meningkatkan daya tahan tubuh balita.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Ciptakan Lingkungan yang Mendukung Tumbuh Kembang: </h6>
                <p>
                  Pastikan balita berada di lingkungan yang aman dan sehat, bebas dari asap rokok, polusi, dan potensi bahaya lainnya.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Penuhi Kebutuhan Gizi Selama 1000 Hari Pertama: </h6>
                <p>
                  1000 hari pertama kehidupan anak (mulai dari masa kehamilan hingga dua tahun pertama kehidupan) sangat penting untuk pertumbuhan dan perkembangan anak. Pastikan balita mendapatkan gizi yang cukup selama periode kritis ini.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Lakukan Pemeriksaan Kesehatan Berkala: </h6>
                <p>
                  Rutin memeriksakan kesehatan balita ke dokter atau puskesmas untuk memantau pertumbuhan dan perkembangan anak.
                </p>
              </li>
              <li>
                <h6 className="font-bold">Ajak Bermain dan Stimulasi Perkembangan: </h6>
                <p>
                  Lakukan aktivitas bermain dan stimulasi perkembangan yang sesuai dengan usia balita. Hal ini membantu meningkatkan perkembangan fisik dan kognitif anak.
                </p>
              </li>
            </ul>
            <p>
              Ingat, konsultasikan semua langkah di atas dengan tenaga medis atau ahli gizi agar dapat disesuaikan dengan kebutuhan khusus balita. Semakin dini tindakan diambil, semakin besar peluang untuk mengatasi stunting dan mencegah dampak jangka panjang pada kesehatan anak.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page