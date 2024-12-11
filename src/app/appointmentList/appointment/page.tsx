import { CheckCircle, Clock, X } from 'lucide-react'
import React from 'react'

const getStatusConfig = (state: any) => {
  switch (state) {
    case 'Pendiente':
      return {
        color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        icon: <Clock className="text-yellow-600" />,
        text: 'Pendiente'
      }
    case 'Cancelado':
      return {
        color: 'bg-red-100 text-red-800 border-red-300',
        icon: <X className="text-red-600" />,
        text: 'Cancelado'
      }
    case 'Terminado':
      return {
        color: 'bg-green-100 text-green-800 border-green-300',
        icon: <CheckCircle className="text-green-600" />,
        text: 'Terminado'
      }
    default:
      return {
        color: 'bg-gray-100 text-gray-800 border-gray-300',
        icon: null,
        text: state
      }
  }
}

const appointment = {
  date: '2024-11-28',
  clientName: 'John Doe',
  vehicle: 'Toyota Corolla',
  state: 'Pendiente'
}

export default function Appointment() {
  const statusConfig = getStatusConfig(appointment.state)

  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex flex-col items-center justify-between gap-5">
        <h2 className="text-2xl font-bold text-gray-800">
          Turno: {appointment.date}
        </h2>

        <div
          className={`flex items-center space-x-2 rounded-full px-3 py-1 ${statusConfig.color} font-medium`}
        >
          {statusConfig.icon}
          <span>{statusConfig.text}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-50 p-4 text-center shadow-sm">
          <p className="mb-2 text-sm text-gray-500">Cliente</p>
          <p className="text-lg font-semibold text-gray-700">
            {appointment.clientName}
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-4 text-center shadow-sm">
          <p className="mb-2 text-sm text-gray-500">Vehículo</p>
          <p className="text-lg font-semibold text-gray-700">
            {appointment.vehicle}
          </p>
        </div>
      </div>
    </div>
  )
}
