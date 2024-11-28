import { IQueryParams } from '@/hooks/useQueryParams'
import getDataByFetch, { FetchResult } from '@/lib/fetch'
import { generateQueryParamsString } from '@/lib/params'

import {
  Appointment,
  AppointmentCollection,
  IAppointment
} from '../models/appointment'

class AppointmentService {
  async getAppointment(id: number): Promise<FetchResult<Appointment>> {
    const { data, error } = await getDataByFetch<IAppointment>(
      `/appointments?id=${id}`,
      {
        method: 'GET',
        tags: ['appointment', id.toString()]
      }
    )
    const appointment = data ? new Appointment({ ...data }) : null
    return { data: appointment, error }
  }

  async getAppointments(
    params?: IQueryParams[]
  ): Promise<FetchResult<AppointmentCollection>> {
    const queryParams = params ? generateQueryParamsString(params) : ''

    console.log(`Fetching appointments from: /appointments${queryParams}`);
    const { data, error } = await getDataByFetch<IAppointment[]>(
      `/appointments${queryParams}`,
      {
        method: 'GET',
        tags: [`appointments`]
      }
    )
    const appointments = data ? new AppointmentCollection(data) : null
    return { data: appointments, error }
  }

  async updateAppointment(
    appointment: IAppointment
  ): Promise<FetchResult<Appointment>> {
    const { data: response, error } = await getDataByFetch<IAppointment>(
      `/appointments?id=${appointment.id}`,
      {
        method: 'PUT',
        body: appointment,
        tags: ['appointment', appointment.id.toString()]
      }
    )
    const newAppointment = response ? new Appointment({ ...response }) : null
    return { data: newAppointment, error }
  }
}

export const appointmentService = new AppointmentService()
