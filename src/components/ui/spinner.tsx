import { RotateCw } from 'lucide-react'

import { cn } from '@/lib/utils'

const Spinner = ({ className }: { className?: string }) => {
  return <RotateCw className={cn('h-4 w-4 animate-spin', className)} />
}

export { Spinner }
