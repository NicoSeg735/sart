import { z } from 'zod'

export const assignMechanicToAppointment = z.object({
  mechanic: z.string().min(1, 'Debes seleccionar un mecánico'),
  appointment: z.string().min(1, 'Debes seleccionar un turno')
})
