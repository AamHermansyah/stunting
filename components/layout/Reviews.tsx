/* eslint-disable @next/next/no-img-element */
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {BsBoxArrowDownLeft} from "react-icons/bs"

const Reviews = () => {
  return (
    <div className="flex flex-col w-full h-auto mt-8 p-6">
      <div className="flex items-center ">
        <h2 className="sm:text-2xl text-lg font-semibold sm:m-4">Rating dan Ulasan Puskesmas</h2>
        <BsBoxArrowDownLeft size={23} className=" mr-4 sm:mr-0" />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center m-4 w-full h-auto sm:gap-8">
        <div className="flex flex-col space-y-2 text-primary">
            <h1 className="text-5xl font-bold m-4">4,0</h1>
            <div className="flex gap-1 items-center">
              <AiFillStar size={15}/>
              <AiFillStar size={15}/>
              <AiFillStar size={15}/>
              <AiFillStar size={15}/>
              <AiOutlineStar size={15}/>
            </div>
              <h4>37,4 Ribu Ulasan</h4>
        </div>

        <div className="flex items-center text-primary mt-2 -ml-[280px] sm:ml-0">
          <div className="flex items-center flex-col">

            <div className="relative flex items-center gap-2">
              <p className="font-semibold text-md">5</p>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-primary z-[1]"/>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-gray-200"/>
            </div>
            <div className="relative flex items-center gap-2">
              <p className="font-semibold text-md">4</p>
              <div className="absolute left-6 w-[200px] sm:w-[400px] h-[5px] rounded-md bg-primary z-[1]"/>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-gray-200"/>
            </div>
            <div className="relative flex items-center gap-2">
              <p className="font-semibold text-md">3</p>
              <div className="absolute left-6 w-[150px] sm:w-[300px] h-[5px] rounded-md bg-primary z-[1]"/>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-gray-200"/>
            </div>
            <div className="relative flex items-center gap-2">
              <p className="font-semibold text-md">2</p>
              <div className="absolute left-6 w-[100px] sm:w-[200px] h-[5px] rounded-md bg-primary z-[1]"/>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-gray-200"/>
            </div>
            <div className="relative flex items-center gap-2">
              <p className="font-semibold text-md">1</p>
              <div className="absolute left-6 w-[50px] sm:w-[100px] h-[5px] rounded-md bg-primary z-[1]"/>
              <div className="absolute left-6 w-[250px] sm:w-[500px] h-[5px] rounded-md bg-gray-200"/>
            </div>

          </div>
        </div>

      </div>

      <div className="-mt-4">
        <section className="bg-white py-8 lg:py-16">
          <div className="max-w-xl">
            <div className="flex flex-col mb-6">
              <h2 className="text-md lg:text-xl font-bold text-gray-900">
                Tuliskan Ulasan Anda
              </h2>
              <div className="flex gap-1 items-center text-primary mt-4">
              <AiOutlineStar size={30}/>
              <AiOutlineStar size={30}/>
              <AiOutlineStar size={30}/>
              <AiOutlineStar size={30}/>
              <AiOutlineStar size={30}/>
            </div>
            </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Silahkan tulis review anda..."
                  // required="true"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
              >
                Kirim Review
              </button>
            </form>
            <article className="p-6 mb-6 text-base bg-white rounded-lg">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-600">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </footer>
              <div className="flex gap-1 items-center text-primary my-3">
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiOutlineStar size={15}/>
              </div>
              <p className="text-gray-500 text-sm">
                Very straight-to-point article. Really worth time reading. Thank you!
                But tools are just the instruments for the UX designers. The knowledge
                of the design tools are as important as the creation of the design
                strategy.
              </p>
            </article>
            <article className="p-6 mb-6 text-base bg-white border-t border-gray-200">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="Bonnie Green"
                    />
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-600">
                    <time dateTime="2022-03-12" title="March 12th, 2022">
                      Mar. 12, 2022
                    </time>
                  </p>
                </div>
              </footer>
              <div className="flex gap-1 items-center text-primary my-3">
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiOutlineStar size={15}/>
              </div>
              <p className="text-gray-500 text-sm">
                The article covers the essentials, challenges, myths and stages the UX
                designer should consider while creating the design strategy.
              </p>
            </article>
            <article className="p-6 text-base bg-white border-t border-gray-200">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      alt="Helene Engels"
                    />
                    Helene Engels
                  </p>
                  <p className="text-sm text-gray-600">
                    <time dateTime="2022-06-23" title="June 23rd, 2022">
                      Jun. 23, 2022
                    </time>
                  </p>
                </div>
              </footer>
              <div className="flex gap-1 items-center text-primary my-3">
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiFillStar size={15}/>
                <AiOutlineStar size={15}/>
              </div>
              <p className="text-gray-500 text-sm">
                Thanks for sharing this. I do came from the Backend development and
                explored some of the tools to design my Side Projects.
              </p>
            </article>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Reviews
