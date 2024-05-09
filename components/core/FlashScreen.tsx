import React from 'react'

function FlashScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex justify-center items-center">
      <h1 className="text-primary text-2xl font-semibold animate-pulse tracking-wider">
        Stunting.id
      </h1>
    </div>
  )
}

export default FlashScreen