import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Services() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm sm:text-base text-left" onlyTitle>
          1. Layanan Kesehatan Umum
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-sm sm:text-base text-left">
          2. Layanan Kesehatan Ibu dan Anak
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal list-inside pl-4">
            <li>Pemeriksaan Kehamilan : Senin dan Rabu</li>
            <li>Pelayanan KB (Suntik, Pil, Kondom) : Setiap Hari Kerja</li>
            <li>Pelayanan KB (Implant, IUD) : Sesuai dengan Perjanjian</li>
            <li>Pelayanan Imunisasi
              <ul className="list-disc list-inside pl-4 text-sm">
                <li>DPT, Polio, TD : Selasa dan Kamis</li>
                <li>BCG, MR, Campak : Kamis Minggu ke-4</li>
              </ul>
            </li>
            <li>Pelayanan bayi dan Anak : Setiap Hari Kerja</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-sm sm:text-base text-left" onlyTitle>
          3. Layanan Kesehatan Gigi dan Mulut
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-sm sm:text-base text-left" onlyTitle>
          4. Layanan TB DOTS (Rabu)
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-sm sm:text-base text-left" onlyTitle>
          5. Layanan Laboratorium
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-sm sm:text-base text-left" onlyTitle>
          6. Layanan Farmasi
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-sm sm:text-base text-left">
          7. Layanan Farmasi
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal list-inside pl-4">
            <li>Konseling Kesehatan Lingkungan (Senin dan Rabu)</li>
            <li>Konseling Gizi (Selasa)</li>
            <li>Konseling Pelayanan Kesehatan Peduli Remaja (Kamis)</li>
            <li>Konseling Penyakit Tidak Menular (Selasa)</li>
            <li>Konseling Upaya Berhenti Merokok (Selasa)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Services