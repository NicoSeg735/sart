import { Repository } from 'typeorm'

import { initializeDatabase } from '@/lib/typeorm'
import { User } from '@/lib/typeorm/entities/User'

export class UserService {
  private userRepository: Repository<User>
  private initialized: Promise<void>

  constructor() {
    this.initialized = this.initializeRepository()
  }

  private async initializeRepository() {
    const dataSource = await initializeDatabase()
    this.userRepository = dataSource.getRepository(User)
  }

  async createUser(userData: Partial<User>): Promise<User> {
    try {
      if (!userData.email) {
        throw new Error('Missing required fields')
      }
      await this.initialized
      const newUser = new User()
      newUser.name = userData.name
      newUser.email = userData.email

      return await this.userRepository.save(newUser)
    } catch (error) {
      console.error('Error creating user:', error)
      throw new Error('Error creating user')
    }
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    try {
      let user = await this.userRepository.findOneBy({
        id
      })
      if (user) {
        user = { ...user, ...userData } as User
        return await this.userRepository.save(user)
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      throw new Error('Error updating user')
    }
  }

  async getUser(id: number): Promise<User | null> {
    await this.initialized
    try {
      const user = await this.userRepository.findOneBy({
        id
      })
      return user || null
    } catch (error) {
      console.error('Error fetching user:', error)
      throw new Error('Error fetching user')
    }
  }
}
