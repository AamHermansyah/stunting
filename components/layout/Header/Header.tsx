'use client'

import Link from 'next/link'
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
import { Button } from '../../ui/button'
import NavHeaderLinks from './NavHeaderLinks'
import MobileNavHeaderLinks from './MobileNavHeaderLinks'
import { signOut } from "next-auth/react"

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-12 py-3">
        <div className="font-bold">
          <Link href="/" className="text-primary">Stunting.id</Link>
        </div>
        <nav className="hidden text-sm font-semibold sm:flex items-center gap-10">
          <NavHeaderLinks />
          {true ? (
            <Button
              className="bg-destructive text-destructive-foreground hover:bg-destructive"
              onClick={() => signOut({ callbackUrl: '/auth/login' })}
            >
              Logout
            </Button>
          ) : (
            <Link href='/auth/login'>
              <Button size="sm" className="px-4">
                Login
              </Button>
            </Link>
          )}
        </nav>
        <div className="block sm:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger>
              {open ? <IoMdClose fontSize={24} /> : <HiMenu fontSize={24} />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="block sm:hidden w-[200px] -translate-x-2">
              <DropdownMenuLabel>Navigasi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <MobileNavHeaderLinks />
              <DropdownMenuItem>
                {false ? (
                  <Button
                    size="sm"
                    className="w-full bg-destructive text-destructive-foreground hover:bg-destructive"
                    onClick={() => signOut({ callbackUrl: '/auth/login' })}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link href='/auth/login'>
                    <Button size="sm" className="w-full">
                      Login
                    </Button>
                  </Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header