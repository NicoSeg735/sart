import { IMechanic } from './mechanic'
import { IVehicle } from './vehicle'

export type IAppointment = {
  id: number
  date: string
  estimatedPrice: number
  status: boolean
  documentations: boolean
  vehicle: IVehicle
  mechanic: IMechanic
}

export class Appointment {
  private id: number
  private date: string
  private estimatedPrice: number
  private status: boolean
  private documentations: boolean
  private vehicle: IVehicle
  private mechanic: IMechanic

  constructor(appointment: IAppointment) {
    this.id = appointment.id
    this.date = appointment.date
    this.estimatedPrice = appointment.estimatedPrice
    this.status = appointment.status
    this.documentations = appointment.documentations
    this.vehicle = appointment.vehicle
    this.mechanic = appointment.mechanic
  }

  public getId(): number {
    return this.id
  }

  public setId(id: number): void {
    this.id = id
  }

  public getDate(): string {
    return this.date
  }

  public setDate(date: string): void {
    this.date = date
  }

  public getEstimatedPrice(): number {
    return this.estimatedPrice
  }

  public setEstimatedPrice(estimatedPrice: number): void {
    this.estimatedPrice = estimatedPrice
  }

  public getStatus(): boolean {
    return this.status
  }

  public setStatus(status: boolean): void {
    this.status = status
  }

  public getDocumentations(): boolean {
    return this.documentations
  }

  public setDocumentations(documentations: boolean): void {
    this.documentations = documentations
  }

  public getVehicle(): IVehicle {
    return this.vehicle
  }

  public setVehicle(vehicle: IVehicle): void {
    this.vehicle = vehicle
  }

  public getMechanic(): IMechanic {
    return this.mechanic
  }

  public setMechanic(mechanic: IMechanic): void {
    this.mechanic = mechanic
  }

  public getData(): IAppointment {
    return {
      id: this.id,
      date: this.date,
      estimatedPrice: this.estimatedPrice,
      status: this.status,
      documentations: this.documentations,
      vehicle: this.vehicle,
      mechanic: this.mechanic
    }
  }
}

export class AppointmentCollection {
  private appointments: Appointment[]

  constructor(appointments: IAppointment[]) {
    this.appointments = appointments.map(
      (appointment) => new Appointment(appointment)
    )
  }

  public getAppointments(): Appointment[] {
    return this.appointments
  }

  public setAppointments(appointments: Appointment[]): void {
    this.appointments = appointments
  }

  public addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment)
  }

  public getData(): IAppointment[] {
    return this.appointments.map((appointment) => appointment.getData())
  }
}
