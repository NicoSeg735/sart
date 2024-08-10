import Link from 'next/link'

import { buttonVariants } from '@/components/ui'
import { cn } from '@/lib/utils'

export default async function Home() {
  return (
    <main className="flex flex-grow flex-col items-center gap-8 p-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">SART</h1>
        <h2 className="text-center text-xl font-semibold">
          (Sistema Automatizado de Revisiones Técnicas)
        </h2>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center gap-4">
        <Link
          href="/assignMechanic"
          className={cn(buttonVariants({ variant: 'default' }), 'w-fit')}
        >
          Asignar mecánico a vehículo
        </Link>
      </div>
    </main>
  )
}
