'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  useToast
} from '@/components/ui'
import { assignMechanicToAppointment } from '@/schemas/user'

export const mechanicsAvailable = [
  { value: '1', label: 'Juan Carlos' },
  { value: '2', label: 'Roberto Gonzalez' }
]

const appointmentsAvailable = [
  { value: '1', label: 'Turno 1' },
  { value: '2', label: 'Turno 2' }
]

export default function FormContainer() {
  const { toast } = useToast()
  const loading = false

  const form = useForm<z.infer<typeof assignMechanicToAppointment>>({
    resolver: zodResolver(assignMechanicToAppointment),
    defaultValues: {
      mechanic: '',
      appointment: ''
    }
  })

  const { reset, formState } = form

  async function onSubmit(values: z.infer<typeof assignMechanicToAppointment>) {
    console.log(values)
    toast({
      title: 'Mecánico asignado',
      description: 'El mecánico se asignó al turno correctamente'
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-grow flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="mechanic"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Mecánicos disponibles</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                name={field.name}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un mecánico" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mechanicsAvailable.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appointment"
          render={({ field }) => (
            <FormItem className="sm:max-w-xs">
              <FormLabel>Turnos disponibles</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                name={field.name}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {appointmentsAvailable.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-4 flex flex-grow flex-col items-stretch justify-end gap-4 sm:flex-row sm:items-end">
          <Button
            disabled={loading || !formState.isDirty}
            variant={'secondary'}
            className={`${!formState.isDirty ? 'disabled:opacity-0' : 'opacity-100'} transition-opacity duration-200`}
            type="button"
            onClick={() => reset()}
          >
            Deshacer
          </Button>
          <Button
            disabled={loading || !formState.isDirty}
            loading={loading}
            type="submit"
          >
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  )
}
