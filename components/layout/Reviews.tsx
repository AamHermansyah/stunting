/* eslint-disable @next/next/no-img-element */
'use client';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useState } from "react";
import { Button } from "../ui/button";

const data = [
  'Aam Hermansyah',
  'Ahmad Saepudin',
  'Mark Zuckerbg',
  'Elon Must'
]

const Reviews = () => {
  const [rating, setRating] = useState(0)

  return (
    <div className="mt-14">
      <h2 className="sm:text-2xl text-lg font-semibold">Rating dan Ulasan</h2>

      <div className="grid grid-cols-2 mt-10 place-items-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-7xl font-black text-primary">4,0</h1>
          <div className="flex gap-1 items-center text-orange-400 text-4xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <h4 className="font-semibold text-muted-foreground">
            37,4 Ribu Ulasan
          </h4>
        </div>

        <div className="w-full">
          {[5, 4, 3, 2, 1].map((rate) => (
            <div key={rate} className="w-full flex items-center gap-4">
              <span className="font-semibold text-lg text-muted-foreground">{rate}</span>
              <div className="relative w-full h-3 bg-muted-foreground/10 rounded-full overflow-hidden">
                <div className="absolute left-0 inset-y-0 w-[50%] bg-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white py-8 lg:py-16">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="space-y-8 max-h-[600px] overflow-y-auto custom-scrollbar">
            {data.map((name) => (
              <div key={name}>
                <div className="w-full flex items-center gap-4 text-lg text-gray-900">
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  <div>
                    <h6>
                      name
                    </h6>
                    <time dateTime="2022-02-08" title="February 8th, 2022" className="text-sm text-gray-600">
                      Feb. 8, 2022
                    </time>
                  </div>
                </div>
                <div className="flex gap-1 items-center mt-3 text-xl text-orange-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="mt-1.5">
                  <p className="text-gray-500 text-sm">
                    Very straight-to-point article. Really worth time reading. Thank you!
                    But tools are just the instruments for the UX designers. The knowledge
                    of the design tools are as important as the creation of the design
                    strategy.
                  </p>
                </div>
              </div>
            ))}
            <Button>Muat lebih banyak</Button>
          </div>
          <div>
            <div className="flex flex-col mb-6">
              <h2 className="text-md lg:text-xl font-bold">
                Tuliskan Ulasan Anda
              </h2>
              <div className="flex gap-1 items-center text-primary mt-4">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index + 1 <= rating) return (
                    <button key={index} className="text-4xl active:scale-90 transition">
                      <AiFillStar
                        onClick={() => setRating(index + 1)}
                      />
                    </button>
                  )

                  return (
                    <button key={index} className="text-4xl active:scale-90 transition">
                      <AiOutlineStar
                        onClick={() => setRating(index + 1)}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
            <form className="mb-6">
              <textarea
                id="comment"
                className="w-full h-[200px] text-sm py-2 px-4 mb-4 bg-white rounded-lg border border-border focus:border-border focus:ring-0 focus:outline-none resize-none"
                placeholder="Silahkan tulis review anda..."
              />
              <Button>
                Kirim Review
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Reviews
