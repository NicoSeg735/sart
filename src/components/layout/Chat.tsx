import React from 'react'

interface Message {
  id: number
  time: string
  side: string
  sender: string
  message: string
}

interface ChatProps {
  messages: Message[]
}

const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isLeft = message.side === 'left'
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`relative max-w-xs rounded-xl ${isLeft ? 'rounded-bl-none' : 'rounded-br-none'} px-4 py-2 shadow-lg ${
          isLeft ? 'bg-gray-200 text-gray-900' : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-sm">{message.message}</p>
        <p className="mt-2 text-right text-xs">{message.time}</p>
        <div
          className={`absolute bottom-0 size-4 bg-inherit ${isLeft ? '-left-4' : '-right-4'}`}
        />
        <div
          className={`absolute bottom-0 size-8 rounded-full bg-background ${isLeft ? '-left-8' : '-right-8'}`}
        />
      </div>
    </div>
  )
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="space-y-4 p-4">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
    </div>
  )
}

export default Chat
