import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui"

interface QuestionCardProps {
  clientName: string,
  rason: string
}

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <>
      <Card className="w-full mb-3">
        <CardHeader>
          <CardTitle>Consulta: {props.rason}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cliente: {props.clientName}</p>
        </CardContent>
        <CardFooter className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600">
            Ingresar
          </button>

          <button className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600">
            Finalizar consulta
          </button>
        </CardFooter>
      </Card>
    </>
  )
}