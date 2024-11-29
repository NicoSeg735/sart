import Link from 'next/link'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui'

interface QuestionCardProps {
  clientName: string
  title: string
  id: number
}

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <>
      <Card className="w-full p-2">
        <CardHeader>
          <CardTitle>Consulta: {props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cliente: {props.clientName}</p>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Link
            href={`/clientQuestions/chat/${props.id}`}
            className="rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600"
          >
            Ingresar
          </Link>

          <button className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Finalizar
          </button>
        </CardFooter>
      </Card>
    </>
  )
}
