'use client'

import { useState } from 'react'
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
import MobileNavHeaderLinks from './MobileNavHeaderLinks';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

function MobileMenuHeader() {
  const [open, setOpen] = useState(false);

  return (
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
  )
}

export default MobileMenuHeader