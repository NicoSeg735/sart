import Link from 'next/link'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui'

interface AppointmentCardProps {
  date: string
  clientName: string
  vehicle: string
}

export default function AppointmentCard(props: AppointmentCardProps) {
  return (
    <>
      <Card className="mb-3 w-full">
        <CardHeader>
          <CardTitle>Fecha: {props.date}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {props.clientName} | {props.vehicle}
          </p>
        </CardContent>
        <CardFooter>
          <button className="rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600">
            <Link href="appointmentList/appointment"> Ver</Link>
          </button>
        </CardFooter>
      </Card>
    </>
  )
}
