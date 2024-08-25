import { Employee, IEmployee } from './employee'

export interface IMechanic extends IEmployee {
  type: 'Mechanic'
}

export class Mechanic extends Employee {
  private type: 'Mechanic'

  constructor(data: IMechanic) {
    super(data)
    this.type = data.type
  }

  public getType(): 'Mechanic' {
    return this.type
  }
}

export class MechanicCollection {
  private mechanics: Mechanic[]

  constructor(data: IMechanic[]) {
    this.mechanics = data.map((mechanic) => new Mechanic(mechanic))
  }

  public getMechanics(): Mechanic[] {
    return this.mechanics
  }

  public setMechanics(mechanics: Mechanic[]): void {
    this.mechanics = mechanics
  }

  public addMechanic(mechanic: Mechanic): void {
    this.mechanics.push(mechanic)
  }

  public removeMechanic(mechanic: Mechanic): void {
    this.mechanics = this.mechanics.filter(
      (m) => m.getId() !== mechanic.getId()
    )
  }

  public getData(): IMechanic[] {
    return this.mechanics.map((mechanic) => ({
      id: mechanic.getId(),
      name: mechanic.getName(),
      dni: mechanic.getDni(),
      user: mechanic.getUser(),
      type: mechanic.getType()
    }))
  }
}
