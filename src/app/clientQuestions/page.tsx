import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

import questions from '@/data/questions.json'

import QuestionCard from './components/questionCard'

export default function QuestionList() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="flex size-8 items-center justify-center rounded-full duration-200 hover:bg-gray-200"
        >
          <ChevronLeftIcon className="size-6" />
        </Link>
        <h1 className="text-3xl font-bold">Consultas</h1>
      </div>
      <div className="flex w-full flex-col gap-4">
        {questions.map((question) => (
          <QuestionCard
            id={question.id}
            key={question.id}
            clientName={question.clientName}
            title={question.reason}
          />
        ))}
      </div>
    </div>
  )
}
