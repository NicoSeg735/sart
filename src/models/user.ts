export type IUser = {
  id: number
  password: string
  email: string
}

export class User {
  private id: number
  private password: string
  private email: string

  constructor(id: number, password: string, email: string) {
    this.id = id
    this.password = password
    this.email = email
  }

  getData(): IUser {
    return {
      id: this.id,
      password: this.password,
      email: this.email
    }
  }
}
