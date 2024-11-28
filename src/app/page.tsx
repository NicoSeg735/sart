import NavegationSection from '@/components/layout/NavigationSection'

export default async function Home() {
  return (
    <div>
      <NavegationSection
        buttons={[
          { name: 'Tarifas', link: '/' },
          { name: 'Consultas', link: '/clientQuestions' },
          { name: 'Turnos', link: '/appointmentList' }
        ]}
      />
    </div>
  )
}
