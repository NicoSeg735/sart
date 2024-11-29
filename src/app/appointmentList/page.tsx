import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

import AppointmentCard from './components/AppointmentCard'

const appointments = [
  {
    date: '2024-11-28',
    clientName: 'John Doe',
    vehicle: 'Toyota Corolla'
  },
  {
    date: '2024-11-29',
    clientName: 'Jane Smith',
    vehicle: 'Honda Civic'
  },
  {
    date: '2024-11-30',
    clientName: 'Jane Smith',
    vehicle: 'Honda Civic'
  }
]

export default function AppointmentList() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="flex size-8 items-center justify-center rounded-full duration-200 hover:bg-gray-200"
        >
          <ChevronLeftIcon className="size-6" />
        </Link>
        <h1 className="text-3xl font-bold">Turnos</h1>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            date={appointment.date}
            clientName={appointment.clientName}
            vehicle={appointment.vehicle}
          />
        ))}
      </div>
    </div>
  )
}
