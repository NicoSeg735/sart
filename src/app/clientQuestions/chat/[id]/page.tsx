'use client'

import { ChevronLeftIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import Chat from '@/components/layout/Chat'
import { Button } from '@/components/ui/button'
import questions from '@/data/questions.json'

interface Message {
  id: number
  time: string
  side: string
  sender: string
  message: string
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10)
  const question = questions.find((q) => q.id === id)
  const [messages, setMessages] = useState<Message[]>(question?.chat || [])
  const [newMessage, setNewMessage] = useState<string>('')
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const formatTime = (date: Date): string => {
    const pad = (num: number) => (num < 10 ? '0' : '') + num
    return `${pad(date.getHours())}:${pad(date.getMinutes())}`
  }

  const handleAddMessage = () => {
    if (newMessage.trim() === '') return

    const newMessageObj: Message = {
      id: messages.length + 1,
      time: formatTime(new Date()),
      side: 'right',
      sender: 'You',
      message: newMessage
    }

    setMessages([...messages, newMessageObj])
    setNewMessage('')
    setIsPopupOpen(false)
  }

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
          <h2 className="text-lg text-gray-500">
            Cliente: {question?.clientName}
          </h2>
        </div>
      </div>

      <Chat messages={messages} />

      <Button onClick={() => setIsPopupOpen(true)}>Responder</Button>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-96 rounded-lg bg-white p-6 shadow-xl">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <XIcon className="size-6" />
            </button>
            <h2 className="mb-4 text-xl font-semibold">Añadir Nuevo Mensaje</h2>

            <textarea
              placeholder="Escribe tu mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="mb-4 h-32 w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button onClick={handleAddMessage}>Enviar Mensaje</Button>
          </div>
        </div>
      )}
    </div>
  )
}
