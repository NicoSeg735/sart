import Hero from '@/components/layout/Hero'
import NavigationSection from '@/components/layout/NavigationSection'

export default async function Home() {
  return (
    <div className="flex flex-grow flex-col items-center gap-12 pt-20">
      <Hero />
      <NavigationSection
        buttons={[
          {
            name: 'Turnos',
            link: '/appointmentList',
            roles: ['technical-director', 'service-advisor']
          },
          { name: 'Tarifas', link: '#', roles: ['service-advisor'] },
          {
            name: 'Consultas',
            link: '/clientQuestions',
            roles: ['service-advisor']
          },
          {
            name: 'Historial de asignaciones',
            link: '#',
            roles: ['technical-director']
          },
          {
            name: 'Asignar mecánico a vehículo',
            link: '/assignMechanic',
            roles: ['technical-director']
          }
        ]}
      />
    </div>
  )
}
