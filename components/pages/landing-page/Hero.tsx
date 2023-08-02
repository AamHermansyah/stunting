import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero" className="min-h-[450px] flex items-center">
      <div className="w-full md:grid grid-cols-2 gap-4 mt-14 sm:mt-0 sm:p-10 md:p-0">
        <div className="space-y-4 flex flex-col justify-center max-w-[390px] px-4 sm:px-0">
          <h2 className="font-bold text-4xl sm:text-5xl tracking-wider sm:leading-[60px]">
            Hayu baraya urang nyegah stunting!
          </h2>
          <p className="sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in iusto perferendis corrupti fugiat rerum ut, voluptates possimus temporibus autem.
          </p>
          <Button href="/cek-stunting" className="w-max">Cek Stunting</Button>
        </div>
        <div className="relative w-full aspect-video bg-gray-300 rounded mt-10 md:mt-0">
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