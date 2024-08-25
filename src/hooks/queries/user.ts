import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'

import { FetchError } from '@/lib/fetch'
import { User } from '@/models/user'
import { userService } from '@/services/user'

export const useGetUser = (
  id?: number,
  options?: Partial<UndefinedInitialDataOptions<User, FetchError, User>>
) => {
  return useQuery<User, FetchError>({
    queryKey: ['getUser', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('User id is required')
      }
      const response = await userService.getUser(id)
      if (response.error || !response.data) {
        throw response.error || new Error('User not found')
      }
      return response.data
    },
    ...options
  })
}
