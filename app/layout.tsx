import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stunting App',
  description: 'Website yang menyediakan ilmu pengetahuan mengenai stunting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <header className="fixed left-0 top-0 w-full z-50 bg-white">
            <div className="flex items-center justify-between px-4 sm:px-14 py-6 shadow-lg">
              <div className="font-bold">
                <Link href="/" className="text-xl text-primary">Stunting App</Link>
              </div>
              <nav className="font-semibold flex items-center gap-10">
                <Link href="/">Cek Stunting</Link>
                <Link href="/">Konsultasi</Link>
                <Link href="/">Artikel</Link>
              </nav>
            </div>
          </header>
          <div className="mt-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
