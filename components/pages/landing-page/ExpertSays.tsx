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
    name: "Prof. Dr. Andi Muh. Irwan",
    comment: "Melalui upaya bersama, kita dapat memberikan akses yang lebih baik terhadap gizi, edukasi, dan perawatan kesehatan bagi anak-anak yang rentan terhadap stunting. Mari kita jadikan stunting sebagai prioritas untuk masa depan yang lebih baik.",
    expert: "Ahli Gizi dan Kesehatan Masyarakat",
    imageUrl: 'https://source.unsplash.com/300x600?doctor'
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Dengan website ini, saya yakin kita dapat lebih meningkatkan pemahaman masyarakat tentang stunting. Kolaborasi dan informasi yang diberikan dapat membantu dalam pencegahan dan penanganan stunting.",
    expert: "Ahli Gigi",
    imageUrl: 'https://source.unsplash.com/300x600?man'
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment: "Saya mendukung inisiatif web stunting ini. Dengan dukungan dan informasi yang diberikan, kita dapat bersama-sama mengatasi stunting dan memberikan perawatan yang tepat untuk anak-anak yang membutuhkannya.",
    expert: "Ahli Bedah",
    imageUrl: 'https://source.unsplash.com/300x600?people'
  },
  {
    id: 4,
    name: "Sarah Davis",
    comment: "Web stunting ini memberikan platform yang sangat penting untuk penyebaran informasi seputar perawatan kulit anak-anak. Saya berharap dapat melihat perubahan positif dalam pencegahan stunting melalui kolaborasi ini.",
    expert: "Ahli Kulit",
    imageUrl: 'https://source.unsplash.com/300x600?expert'
  },
  {
    id: 5,
    name: "David Lee",
    comment: "Sebagai ahli mata, saya melihat pentingnya akses yang lebih baik terhadap perawatan kesehatan mata anak-anak. Web stunting ini dapat menjadi sarana penting untuk meningkatkan kesehatan mata generasi mendatang.",
    expert: "Ahli Mata",
    imageUrl: 'https://source.unsplash.com/300x600?woman'
  },
  {
    id: 6,
    name: "Emily Brown",
    comment: "Inisiatif web stunting ini sangat penting dalam mendukung pemahaman masyarakat tentang kesehatan jantung anak-anak. Mari bersama-sama menciptakan lingkungan yang mendukung pertumbuhan sehat bagi mereka.",
    expert: "Ahli Jantung",
    imageUrl: 'https://source.unsplash.com/300x600?law'
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
            Mari kita resapi dan pahami yang mereka (para ahli) berbicara terkait dengan masalah yang dialami oleh kebanyakan keluarga di indonesia
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
                  <div className="flex min-h-[200px]">
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