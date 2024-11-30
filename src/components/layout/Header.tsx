'use client'

import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui'
import { useSession } from '@/stores/session'

export default function Header() {
  const { user, logout, role } = useSession()
  const pathname = usePathname()
  const { push } = useRouter()

  const handleClick = () => {
    if (user) {
      logout()
      push('/login')
    } else {
      push('/login')
    }
  }

  return (
    <header className="sticky inset-x-0 top-0 z-40 flex flex-col text-sm text-gray-500">
      <div className="flex h-14 items-center justify-between bg-brand px-4 text-white">
        <Link href={'/'} className="p-2 text-lg font-bold">
          SART
        </Link>
        <div className="flex items-center gap-4">
          {user && role && (
            <div className="flex items-center gap-2">
              <UserIcon className="size-8" />
              <div className="leading-tight">
                <p className="text-base font-bold">{user?.name}</p>
                <p className="text-xs">{role?.name}</p>
              </div>
            </div>
          )}
          {pathname !== '/login' && (
            <Button
              onClick={handleClick}
              variant="outline"
              size="sm"
              className="text-primary"
            >
              {user ? 'Cerrar sesión' : 'Iniciar sesión'}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
