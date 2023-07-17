import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-6">
        <div className="font-bold">
          <Link href="/" className="text-primary">Stunting App</Link>
        </div>
        <nav className="hidden text-sm font-semibold sm:flex items-center gap-10">
          <Link href="/">Cek Stunting</Link>
          <Link href="/">Konsultasi</Link>
          <Link href="/">Artikel</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header