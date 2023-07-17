import { useRef } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardContent } from '@/components/ui/card';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    expert: "Ahli Gizi & Nutrisi",
    imageUrl: 'https://source.unsplash.com/300x600?doctor'
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Praesent tincidunt consectetur turpis, eu aliquet nisi vestibulum sit amet. Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi.",
    expert: "Ahli Gigi",
    imageUrl: 'https://source.unsplash.com/300x600?man'
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Bedah",
    imageUrl: 'https://source.unsplash.com/300x600?people'
  },
  {
    id: 4,
    name: "Sarah Davis",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Kulit",
    imageUrl: 'https://source.unsplash.com/300x600?expert'
  },
  {
    id: 5,
    name: "David Lee",
    comment: "Nunc nec erat eu nunc interdum faucibus sed et ipsum. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Mata",
    imageUrl: 'https://source.unsplash.com/300x600?woman'
  },
  {
    id: 6,
    name: "Emily Brown",
    comment: "Nunc nec erat eu nunc interdum faucibus sed et ipsum. Etiam ullamcorper arcu vel dolor posuere, a ornare nibh luctus.",
    expert: "Ahli Jantung",
    imageUrl: 'https://source.unsplash.com/300x600?law'
  },
  {
    id: 7,
    name: "Daniel Wilson",
    comment: "Nulla ac tellus tincidunt, lobortis lacus vitae, maximus mi.",
    expert: "Ahli Psikologi",
    imageUrl: 'https://source.unsplash.com/300x600?student'
  },
  {
    id: 8,
    name: "Olivia Taylor",
    comment: "Curabitur lacinia nulla non efficitur malesuada.",
    expert: "Ahli Fisioterapi",
    imageUrl: 'https://source.unsplash.com/300x600?agent'
  },
  {
    id: 9,
    name: "Michael Anderson",
    comment: "Sed nec sem gravida, aliquam enim ac, lobortis urna.",
    expert: "Ahli Ginekologi",
    imageUrl: 'https://source.unsplash.com/300x600?hero'
  },
  {
    id: 10,
    name: "Sophia Thomas",
    comment: "Vivamus lacinia elit in eleifend tincidunt.",
    expert: "Ahli Anestesiologi",
    imageUrl: 'https://source.unsplash.com/300x600?girl'
  },
];

const ExpertsSay = () => {
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
    <section id="experts-say" className="mt-20">
      <div className="py-10">
        <div className="max-w-[500px] space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            What the expert say to this problem.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed, voluptate officia aperiam maiores facere quae quam totam! Assumenda, neque.
          </p>
        </div>
        <div className="relative mt-10">
          <Button
            onClick={slidePrev}
            className="absolute top-[25%] -left-4 p-2.5 text-white z-10 active:scale-95"
          >
            <BiLeftArrowAlt fontSize={24} />
          </Button>
          <Button
            onClick={slideNext}
            className="absolute top-[25%] -right-4 p-2.5 text-white z-10 active:scale-95"
          >
            <BiRightArrowAlt fontSize={24} />
          </Button>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              900: {
                slidesPerView: 3,
              },
              678: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            ref={swiperRef}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="relative lg:px-10 pb-20">
                <Card key={item.id} className="overflow-hidden">
                  <div className="flex h-[200px]">
                    <div className="relative bg-gray-200 basis-[30%]">
                      <img
                        src={item.imageUrl}
                        alt="expert"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="basis-[70%] pt-2 px-3">
                      <h1 className="text-lg font-semibold">
                        {item.name}
                      </h1>
                      <h6 className="text-xs text-gray-400">
                        {item.expert}
                      </h6>
                      <p className="mt-2 text-sm">
                        {`"${item.comment}"`}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ExpertsSay