import { Repository } from 'typeorm'

import { initializeDatabase } from '@/lib/typeorm'
import { User } from '@/lib/typeorm/entities'
import { Mechanic } from '@/lib/typeorm/entities/Mechanic'

type NewMechanic = Omit<Mechanic, 'id' | 'user' | 'appointmentsAssigned'>
type NewUser = Omit<User, 'id'>

export class MechanicService {
  private mechanicRepository: Repository<Mechanic>
  private userRepository: Repository<User>
  private initialized: Promise<void>

  constructor() {
    this.initialized = this.initializeRepository()
  }

  private async initializeRepository() {
    const dataSource = await initializeDatabase()
    this.mechanicRepository = dataSource.getRepository(Mechanic)
    this.userRepository = dataSource.getRepository(User)
  }

  async createMechanic(
    mechanicData: NewMechanic,
    userData?: NewUser
  ): Promise<Mechanic> {
    try {
      await this.initialized
      const newMechanic = new Mechanic()
      newMechanic.name = mechanicData.name
      newMechanic.dni = mechanicData.dni

      if (userData) {
        const newUser = new User()
        newUser.email = userData.email
        newUser.password = userData.password
        await this.userRepository.save(newUser)
        newMechanic.user = newUser
      }

      return await this.mechanicRepository.save(newMechanic)
    } catch (error) {
      console.error('Error creating mechanic:', error)
      throw new Error('Error creating mechanic')
    }
  }

  async updateMechanic(
    id: number,
    mechanicData: Partial<Mechanic>
  ): Promise<Mechanic> {
    try {
      let mechanic = await this.mechanicRepository.findOneBy({
        id
      })
      if (mechanic) {
        mechanic = { ...mechanic, ...mechanicData } as Mechanic
        return await this.mechanicRepository.save(mechanic)
      } else {
        throw new Error('Mechanic not found')
      }
    } catch (error) {
      console.error('Error updating mechanic:', error)
      throw new Error('Error updating mechanic')
    }
  }

  async getMechanic(id: number): Promise<Mechanic | null> {
    await this.initialized
    try {
      const mechanic = await this.mechanicRepository.findOneBy({
        id
      })
      return mechanic || null
    } catch (error) {
      console.error('Error fetching mechanic:', error)
      throw new Error('Error fetching mechanic')
    }
  }
}
