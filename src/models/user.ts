export type IUser = {
  id: number
  password: string
  email: string
}

export class User {
  private id: number
  private password: string
  private email: string

  constructor(user: IUser) {
    this.id = user.id
    this.password = user.password
    this.email = user.email
  }

  public getId(): number {
    return this.id
  }

  public setId(id: number): void {
    this.id = id
  }

  public getPassword(): string {
    return this.password
  }

  public setPassword(password: string): void {
    this.password = password
  }

  public getEmail(): string {
    return this.email
  }

  public setEmail(email: string): void {
    this.email = email
  }

  public getData(): IUser {
    return {
      id: this.id,
      password: this.password,
      email: this.email
    }
  }
}

export class UserCollection {
  private users: User[]

  constructor(users: IUser[]) {
    this.users = users.map((user) => new User(user))
  }

  public getUsers(): User[] {
    return this.users
  }

  public setUsers(users: IUser[]): void {
    this.users = users.map((user) => new User(user))
  }

  public getData(): IUser[] {
    return this.users.map((user) => user.getData())
  }
}
