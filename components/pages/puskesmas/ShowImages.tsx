import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from '@/components/ui/card';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const testimonials = [
  {
    imageUrl: 'https://source.unsplash.com/1600x900?doctor'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?man'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?people'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?expert'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?woman'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?law'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?student'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?agent'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?hero'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900?girl'
  },
];

const ShowImages = () => {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={slidePrev}
        className="absolute top-[50%] -translate-y-[50%] -left-4 p-2.5 text-white z-10 active:scale-95"
      >
        <BiLeftArrowAlt fontSize={24} />
      </Button>
      <Button
        onClick={slideNext}
        className="absolute top-[50%] -translate-y-[50%] -right-4 p-2.5 text-white z-10 active:scale-95"
      >
        <BiRightArrowAlt fontSize={24} />
      </Button>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        ref={swiperRef}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
              <Image
                src={item.imageUrl}
                alt="expert"
                fill={true}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ShowImages