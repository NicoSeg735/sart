
const appointment = {
  "date": "2024-11-28",
  "clientName": "John Doe",
  "vehicle": "Toyota Corolla"
}


export default function Appointment() {
  return (
    <>
      <h2 className="text-xl font-semibold">
        Turno: {appointment.date}
      </h2>
      <div className="w-full flex justify-center items-center space-x-8">
        <div className="w-1/3 border border-2 rounded-lg">
          {appointment.clientName}
        </div>
        <div className="w-1/3 border border-2 rounded-lg">
          {appointment.vehicle}
        </div>
      </div>
    </>
  )
}