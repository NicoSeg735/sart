import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'

import { FetchError } from '@/lib/fetch'
import { Mechanic, MechanicCollection } from '@/models/mechanic'
import { mechanicService } from '@/services/mechanic'

export const useGetMechanic = (
  id?: number,
  options?: Partial<UndefinedInitialDataOptions<Mechanic, FetchError, Mechanic>>
) => {
  return useQuery<Mechanic, FetchError>({
    queryKey: ['getMechanic', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Mechanic id is required')
      }
      const response = await mechanicService.getMechanic(id)
      if (response.error || !response.data) {
        throw response.error || new Error('Mechanic not found')
      }
      return response.data
    },
    ...options
  })
}

export const useGetAvailableMechanics = (
  dateTime?: string,
  options?: Partial<
    UndefinedInitialDataOptions<
      MechanicCollection,
      FetchError,
      MechanicCollection
    >
  >
) => {
  return useQuery<MechanicCollection, FetchError>({
    queryKey: [`getMechanics`],
    queryFn: async () => {
      if (!dateTime) {
        throw new Error('Date time is required')
      }
      const response = await mechanicService.getAvailableMechanics(dateTime)
      if (response.error || !response.data) {
        throw response.error || new Error('Mechanic not found')
      }
      return response.data
    },
    ...options
  })
}
