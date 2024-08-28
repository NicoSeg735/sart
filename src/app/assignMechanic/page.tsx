import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import FormContainer from '@/app/assignMechanic/components/FormContainer'
import { Spinner } from '@/components/ui'
import { appointmentService } from '@/services/appointment'

export default async function AssignMechanic() {
  const actualDate = new Date()
  const parsedDate = actualDate.toISOString().split('T')[0]

  const options = [
    {
      name: 'status',
      value: 'false'
    },
    {
      name: 'startDate',
      value: parsedDate
    },
    {
      name: 'mechanic',
      value: 'null'
    }
  ]

  const { data: appointmentInstance, error: appointmentError } =
    await appointmentService.getAppointments(options)

  if (appointmentError || !appointmentInstance) {
    notFound()
  }

  const appointmentsData = appointmentInstance.getData()

  return (
    <main className="flex w-full flex-grow flex-col items-center gap-8">
      <article className="flex w-full max-w-2xl flex-grow flex-col px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Asignar mecánico a turno</h1>
        <Suspense
          fallback={
            <div className="absolute left-0 top-0 z-10 grid h-full w-full place-content-center">
              <Spinner />
            </div>
          }
        >
          <FormContainer pendingAppointments={appointmentsData} />
        </Suspense>
      </article>
    </main>
  )
}
