import getDataByFetch, { FetchResult } from '@/lib/fetch'

import { IUser, User } from '../models/user'

class UserService {
  async getUser(id: number): Promise<FetchResult<User>> {
    const { data, error } = await getDataByFetch<IUser>(`/users?id=${id}`, {
      method: 'GET',
      tags: ['user', id.toString()]
    })
    const user = data ? new User({ ...data }) : null
    return { data: user, error }
  }
}

export const userService = new UserService()
