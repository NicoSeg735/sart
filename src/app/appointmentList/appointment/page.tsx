const appointment = {
  date: '2024-11-28',
  clientName: 'John Doe',
  vehicle: 'Toyota Corolla',
  state: 'Pendiente'
}

export default function Appointment() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Turno: {appointment.date}
      </h2>
      <h1 className="mb-6 text-lg font-medium text-gray-600">
        Estado del turno: {appointment.state}
      </h1>

      <div className="flex w-full items-center justify-center space-x-8">
        <div className="w-1/3 rounded-lg border border-gray-300 bg-white p-4 text-center shadow-md">
          <p className="text-lg font-semibold text-gray-700">
            {appointment.clientName}
          </p>
        </div>
        <div className="w-1/3 rounded-lg border border-gray-300 bg-white p-4 text-center shadow-md">
          <p className="text-lg font-semibold text-gray-700">
            {appointment.vehicle}
          </p>
        </div>
      </div>
    </>
  )
}
