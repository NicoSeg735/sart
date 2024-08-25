import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'

import { FetchError } from '@/lib/fetch'
import { Vehicle } from '@/models/vehicle'
import { vehicleService } from '@/services/vehicle'

export const useGetVehicle = (
  id?: number,
  options?: Partial<UndefinedInitialDataOptions<Vehicle, FetchError, Vehicle>>
) => {
  return useQuery<Vehicle, FetchError>({
    queryKey: ['getVehicle', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Vehicle id is required')
      }
      const response = await vehicleService.getVehicle(id)
      if (response.error || !response.data) {
        throw response.error || new Error('Vehicle not found')
      }
      return response.data
    },
    ...options
  })
}
