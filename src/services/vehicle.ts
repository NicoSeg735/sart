import getDataByFetch, { FetchResult } from '@/lib/fetch'

import { IVehicle, Vehicle } from '../models/vehicle'

class VehicleService {
  async getVehicle(id: number): Promise<FetchResult<Vehicle>> {
    const { data, error } = await getDataByFetch<IVehicle>(
      `/vehicles?id=${id}`,
      {
        method: 'GET',
        tags: ['vehicle', id.toString()]
      }
    )
    const vehicle = data ? new Vehicle({ ...data }) : null
    return { data: vehicle, error }
  }
}

export const vehicleService = new VehicleService()
