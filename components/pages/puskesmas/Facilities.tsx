import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Facilities() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Lantai 1
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal list-inside pl-4">
            <li>Ruang Pendaftaran</li>
            <li>Ruang Tunggu Pasien</li>
            <li>Unit Pelayanan Umum</li>
            <li>Unit Pelayanan Gigi</li>
            <li>Unit Pelayanan Kesehatan Ibu & Anak</li>
            <li>Unit Pelayanan Laboratorium</li>
            <li>Unit Farmasi</li>
            <li>Ruang Tindakan</li>
            <li>Ruang Menyusui</li>
            <li>Ruang TB DOTS</li>
            <li>Toilet</li>
            <li>Ruang Bermain Anak</li>
            <li>Parkir (Roda 2 dan 4)</li>
            <li>Taman</li>
            <li>Ruang Persalinan (24 Jam)</li>
            <li>Ruang Imunisasi</li>
            <li>Ruang Konseling Gizi</li>
            <li>Ruang Konsultasi PTM</li>
            <li>Ruang Konsultasi P2M</li>
            <li>Ruang Sputum dan Pojok Dahak</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Lantai 2
        </AccordionTrigger>
        <AccordionContent>
          <ul className="list-decimal list-inside pl-4">
            <li>Aula</li>
            <li>Ruang Kepala Puskesmas</li>
            <li>Ruang Kepala TU</li>
            <li>Ruang Bendahara</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Facilities