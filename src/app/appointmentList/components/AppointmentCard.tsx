import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui"
import Link from "next/link"

interface AppointmentCardProps {
  date: string,
  clientName: string,
  vehicle: string
}

export default function AppointmentCard(props: AppointmentCardProps) {
  return (
    <>
      <Card className="w-full mb-3">
        <CardHeader>
          <CardTitle>Fecha: {props.date}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{props.clientName} | {props.vehicle}</p>
        </CardContent>
        <CardFooter>
          <button className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600">
            <Link href="appointmentList/appointment"> Ver</Link>
          </button>
        </CardFooter>
      </Card>
    </>
  )
}