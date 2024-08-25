import { useMutation } from '@tanstack/react-query'

import { IAppointment } from '@/models/appointment'
import { appointmentService } from '@/services/appointment'

export const useUpdateAppointment = () => {
  return useMutation({
    mutationFn: async (appointment: IAppointment) => {
      const response = await appointmentService.updateAppointment(appointment)
      if (response.error || !response.data) {
        throw response.error || new Error('Appointment not found')
      }
      return response.data
    }
  })
}
