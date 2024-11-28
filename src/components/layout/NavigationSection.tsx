import ButtonNavigation from '../ui/buttonNavigation'

interface ButtonProps {
  name: string
  link: string
}

interface NavigationSectionProps {
  buttons: ButtonProps[]
}

export default function NavigationSection(props: NavigationSectionProps) {
  return (
    <div className="flex w-full flex-grow items-center justify-center gap-10">
      {props.buttons.map((button, index) => (
        <ButtonNavigation key={index} name={button.name} link={button.link} />
      ))}
    </div>
  )
}
