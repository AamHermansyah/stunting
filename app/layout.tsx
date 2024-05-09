import Header from '@/components/layout/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stunting.id',
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
        <Toaster />
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <Header />
          <div className="mt-20">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
