import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero" className="min-h-[450px] flex items-center">
      <div className="w-full md:grid grid-cols-2 gap-4 mt-14 sm:mt-0 sm:p-10 md:p-0">
        <div className="space-y-4 flex flex-col justify-center max-w-[490px] px-4 sm:px-0">
          <h2 className="font-bold text-4xl sm:text-5xl tracking-wider" style={{ lineHeight: '120%' }}>
            Hayu baraya urang nyegah stunting!
          </h2>
          <p className="sm:text-lg">
            Stunting merujuk pada kondisi gagal pertumbuhan pada anak akibat kekurangan gizi kronis. Oleh karena itu, upaya dalam melakukan pemantauan dan penanganan stunting.
          </p>
          <Button href="/cek-stunting" className="w-max">Cek Stunting</Button>
        </div>
        <div className="relative w-full aspect-video bg-gray-300 rounded-lg mt-10 md:mt-0 overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="hero"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero