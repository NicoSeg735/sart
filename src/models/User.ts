export type IUser = {
  id: number
  name: string
  email: string
}

export class User {
  public id: number
  public name: string
  public email: string

  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }

  getUser(): IUser {
    return {
      id: this.id,
      name: this.name,
      email: this.email
    }
  }
}
