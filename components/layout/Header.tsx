'use client';

import { navigation } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

function Header() {
  const [open, setOpen] = useState(false);
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
        <div className="block sm:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger>
              {open ? <IoMdClose fontSize={24} /> : <HiMenu fontSize={24} />}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Navigasi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navigation.map((item) => (
                <DropdownMenuItem key={item.id}>
                  <Link
                    href={item.href} 
                    className={pathname.includes(item.href) ? 'text-primary' : ''}
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header