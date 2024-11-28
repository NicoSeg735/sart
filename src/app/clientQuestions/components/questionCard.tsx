import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui'

interface QuestionCardProps {
  clientName: string
  rason: string
}

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <>
      <Card className="mb-3 w-full">
        <CardHeader>
          <CardTitle>Consulta: {props.rason}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cliente: {props.clientName}</p>
        </CardContent>
        <CardFooter className="flex space-x-4">
          <button className="rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Ingresar
          </button>

          <button className="rounded-lg bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Finalizar consulta
          </button>
        </CardFooter>
      </Card>
    </>
  )
}
