import { navigation } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function NavHeaderLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn('hover:text-primary', pathname.includes(item.href) ? 'text-primary' : 'hover:underline hover:underline-offset-4')}
        >
          {item.title}
        </Link>
      ))}
    </>
  )
}

export default NavHeaderLinks