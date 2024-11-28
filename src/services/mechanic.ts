import { IQueryParams } from '@/hooks/useQueryParams'
import getDataByFetch, { FetchResult } from '@/lib/fetch'
import { generateQueryParamsString } from '@/lib/params'

import { IMechanic, Mechanic, MechanicCollection } from '../models/mechanic'

class MechanicService {
  async getMechanic(id: number): Promise<FetchResult<Mechanic>> {
    const { data, error } = await getDataByFetch<IMechanic>(
      `/mechanics?id=${id}`,
      {
        method: 'GET',
        tags: ['mechanic', id.toString()]
      }
    )
    const mechanic = data ? new Mechanic({ ...data }) : null
    return { data: mechanic, error }
  }

  async getMechanics(
    params?: IQueryParams[]
  ): Promise<FetchResult<MechanicCollection>> {
    const queryParams = params ? generateQueryParamsString(params) : ''
    const { data, error } = await getDataByFetch<IMechanic[]>(
      `/mechanics${queryParams}`,
      {
        method: 'GET',
        tags: [`mechanics`, queryParams]
      }
    )
    const mechanics = data ? new MechanicCollection(data) : null
    return { data: mechanics, error }
  }

  async getAvailableMechanics(
    dateTime: string
  ): Promise<FetchResult<MechanicCollection>> {
    const { data, error } = await getDataByFetch<IMechanic[]>(
      `/mechanics/available?dateTime=${dateTime}`,
      {
        method: 'GET',
        tags: ['availableMechanics'],
        cache: 'no-cache'
      }
    )
    const mechanics = data ? new MechanicCollection(data) : null

    return { data: mechanics, error }
  }
}

export const mechanicService = new MechanicService()
