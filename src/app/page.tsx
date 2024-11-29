import Hero from '@/components/layout/Hero'
import NavigationSection from '@/components/layout/NavigationSection'

export default async function Home() {
  return (
    <div className="flex flex-grow flex-col items-center gap-12 pt-20">
      <Hero />
      <NavigationSection
        buttons={[
          { name: 'Tarifas', link: '/' },
          { name: 'Consultas', link: '/clientQuestions' },
          { name: 'Turnos', link: '/appointmentList' }
        ]}
      />
    </div>
  )
}
