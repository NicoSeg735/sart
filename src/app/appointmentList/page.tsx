import AppointmentCard from './components/AppointmentCard'


const appointments = [
  {
    "date": "2024-11-28",
    "clientName": "John Doe",
    "vehicle": "Toyota Corolla"
  },
  {
    "date": "2024-11-29",
    "clientName": "Jane Smith",
    "vehicle": "Honda Civic"
  },
  {
    "date": "2024-11-30",
    "clientName": "Jane Smith",
    "vehicle": "Honda Civic"
  }
]

export default function AppointmentList() {
  return (
    <div className="w-full">
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} date={appointment.date} clientName={appointment.clientName} vehicle={appointment.vehicle} />
      ))}
    </div>
  )
}