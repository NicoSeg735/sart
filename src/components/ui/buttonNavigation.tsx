import Link from 'next/link'

import { buttonVariants } from '@/components/ui'
import { cn } from '@/lib/utils'


interface ButtonNavigationProps {
  name: string,
  link: string
}

export default function ButtonNavigation(props: ButtonNavigationProps) {

  return (
    <>
      <Link
        href={props.link}
        className={cn(buttonVariants({ variant: 'default' }), 'w-1/3')}
      >
        {props.name}
      </Link>
    </>
  )
}