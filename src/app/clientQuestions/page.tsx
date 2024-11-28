import QuestionCard from './components/questionCard'

const Questions = [
  { clientName: 'Juan Pérez', rason: 'Chequeo de frenos' },
  { clientName: 'María López', rason: 'Revisión de emisiones contaminantes' },
  { clientName: 'Carlos Sánchez', rason: 'Inspección de neumáticos' },
  { clientName: 'Ana Gómez', rason: 'Revisión de luces y señalización' }
]

export default function QuestionList() {
  return (
    <div className="w-full">
      {Questions.map((question, index) => (
        <QuestionCard
          key={index}
          clientName={question.clientName}
          rason={question.rason}
        />
      ))}
    </div>
  )
}
