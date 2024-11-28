import ButtonNavigation from "../ui/buttonNavigation"

interface ButtonProps {
  name: string,
  link: string
}

interface NavegationSectionProps {
  buttons: ButtonProps[];
}

export default function NavegationSection(props: NavegationSectionProps) {

  console.log('NavegationSection buttons:', props.buttons);
  return (
    <div className="w-full flex flex-grow items-center justify-center gap-10 ">
      {props.buttons.map((button, index) => (
        <ButtonNavigation key={index} name={button.name} link={button.link} />
      ))}
    </div>
  )
}