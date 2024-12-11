'use client'
import Link from 'next/link'
import { useState } from 'react'
import Switch from 'react-switch'

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
  const [checked, setChecked] = useState(false)

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked)
  }
  return (
    <Card className="w-full p-2">
      <CardHeader>
        <CardTitle>Fecha: {props.date}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {props.clientName} | {props.vehicle}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button className="rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600">
          <Link href="appointmentList/appointment">Ver</Link>
        </button>

        <div className="flex gap-2">
          <span>Documentacion Correcta:</span>
          <Switch
            onChange={handleChange}
            checked={checked}
            offColor="#888"
            onColor="#0f0"
          />
        </div>
      </CardFooter>
    </Card>
  )
}
