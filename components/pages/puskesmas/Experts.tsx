import Image from 'next/image'
import React from 'react'

function Experts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="bg-gradient-to-tr from-primary to-sky-500 rounded p-4" key={item}>
          <div className="w-full flex items-center gap-4">
            <div className="relative w-20 aspect-square rounded-full bg-gray-100 overflow-hidden">
              <Image
                src="/next.svg"
                alt="logo"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="col-span-2">
              <h3 className="text-white font-bold">
                Hj. Aam Hermansyah S.Kom., M.Kom.
              </h3>
              <span className="text-gray-100 text-sm">
                Spealis Web Developer
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experts