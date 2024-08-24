import getDataByFetch, { FetchResult } from '@/lib/fetch'

import { IUser, User } from '../models/user'

class UserService {
  async getUserById(id: number): Promise<FetchResult<User>> {
    const { data, error } = await getDataByFetch<IUser>(`/user?id=${id}`, {
      method: 'GET',
      tags: ['user', id.toString()]
    })
    const user = data ? new User(data.id, data.password, data.email) : null
    return { data: user, error }
  }
}

export const userService = new UserService()
