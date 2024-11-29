import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

import Chat from '@/components/layout/Chat'
import questions from '@/data/questions.json'

export default function ChatPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)

  const question = questions.find((q) => q.id === id)

  const messages = question?.chat || []

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <Link
          href="/clientQuestions"
          className="flex size-8 items-center justify-center rounded-full duration-200 hover:bg-gray-200"
        >
          <ChevronLeftIcon className="size-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">
            ID {id}: {question?.reason}
          </h1>
          <h2 className="text-lg text-muted-foreground">
            Cliente: {question?.clientName}
          </h2>
        </div>
      </div>
      <Chat messages={messages} />
    </div>
  )
}
