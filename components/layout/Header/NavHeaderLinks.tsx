'use client'

import { logout } from '@/actions/logout';
import { Button } from '@/components/ui/button';
import { navigation } from '@/constants'
import { cn } from '@/lib/utils'
import { Session } from 'next-auth';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

type PropTypes = {
  user: Session['user'];
}

function NavHeaderLinks({ user }: PropTypes) {
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
      {!user ? (
        <Link href='/auth/login'>
          <Button size="sm" className="px-4">
            Login
          </Button>
        </Link>
      ) : (
        <Button
          className="bg-destructive text-destructive-foreground hover:bg-destructive"
          onClick={() => logout()}
        >
          Logout
        </Button>
      )}
    </>
  )
}

export default NavHeaderLinks