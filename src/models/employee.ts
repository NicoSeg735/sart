import { IUser } from './user'

export interface IEmployee {
  id: number
  name: string
  dni: string
  user: IUser
}

export class Employee {
  private id: number
  private name: string
  private dni: string
  private user: IUser

  constructor(data: IEmployee) {
    this.id = data.id
    this.name = data.name
    this.dni = data.dni
    this.user = data.user
  }

  public getId(): number {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getDni(): string {
    return this.dni
  }

  public getUser(): IUser {
    return this.user
  }
}
