import { useQuery } from '@tanstack/react-query'

import { FetchError } from '@/lib/fetch'
import { User } from '@/models/user'
import { userService } from '@/services/user'

export const useUser = (id: number) => {
  return useQuery<User, FetchError>({
    queryKey: ['getUser', id],
    queryFn: async () => {
      const response = await userService.getUserById(id)
      if (response.error || !response.data) {
        throw response.error || new Error('User not found')
      }
      return response.data
    }
  })
}
