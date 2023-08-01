'use client';

import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-4">
        <div className="font-bold">
          <Link href="/" className="text-primary">Stunting App</Link>
        </div>
        <nav className="hidden text-sm font-semibold sm:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.id} 
              href={item.href} 
              className={cn('hover:text-primary', pathname.includes(item.href) ? 'text-primary' : 'hover:underline hover:underline-offset-4')}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header