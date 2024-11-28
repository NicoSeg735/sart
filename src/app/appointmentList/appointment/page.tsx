const appointment = {
  date: '2024-11-28',
  clientName: 'John Doe',
  vehicle: 'Toyota Corolla'
}

export default function Appointment() {
  return (
    <>
      <h2 className="text-xl font-semibold">Turno: {appointment.date}</h2>
      <div className="flex w-full items-center justify-center space-x-8">
        <div className="w-1/3 rounded-lg border">{appointment.clientName}</div>
        <div className="w-1/3 rounded-lg border">{appointment.vehicle}</div>
      </div>
    </>
  )
}
