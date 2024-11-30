'use client'

import { useSession } from '@/stores/session'

import ButtonNavigation from '../ui/buttonNavigation'

interface NavigationSectionProps {
  buttons: {
    name: string
    link: string
    roles: string[]
  }[]
}

export default function NavigationSection(props: NavigationSectionProps) {
  const { role } = useSession()
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-10">
      {props.buttons
        .filter((b) => b.roles.includes(role?.id as string))
        .map((button, index) => (
          <ButtonNavigation key={index} name={button.name} link={button.link} />
        ))}
    </div>
  )
}
