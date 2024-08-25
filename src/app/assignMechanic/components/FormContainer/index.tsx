'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Button,
  Card,
  CardTitle,
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
import { useUpdateAppointment } from '@/hooks/mutations/appointment'
import { useGetAvailableMechanics } from '@/hooks/queries/mechanic'
import { useGetVehicle } from '@/hooks/queries/vehicle'
import { IAppointment } from '@/models/appointment'
import { IMechanic } from '@/models/mechanic'
import { IVehicle } from '@/models/vehicle'
import { assignMechanicToAppointment } from '@/schemas/user'

export default function FormContainer({
  pendingAppointments
}: {
  pendingAppointments: IAppointment[]
}) {
  const { toast } = useToast()
  const loading = false

  const form = useForm<z.infer<typeof assignMechanicToAppointment>>({
    resolver: zodResolver(assignMechanicToAppointment),
    defaultValues: {
      mechanic: '',
      appointment: ''
    }
  })

  const { reset, formState, watch } = form

  const updateAppointment = useUpdateAppointment()

  async function onSubmit(values: z.infer<typeof assignMechanicToAppointment>) {
    const mechanicSelected = mechanics?.find(
      (mechanic) => mechanic.id === Number(values.mechanic)
    )
    updateAppointment.mutate({
      ...(appointmentSelected as IAppointment),
      mechanic: mechanicSelected as IMechanic,
      estimatedPrice: 222332
    })
    toast({
      title: 'Mecánico asignado',
      description: 'El mecánico se asignó al turno correctamente'
    })
  }

  const formValues = watch()

  const [appointmentSelected, setAppointmentSelected] = useState<IAppointment>()

  useEffect(() => {
    if (formValues.appointment !== '') {
      const actualAppointment = pendingAppointments.find(
        (item) => item.id === Number(formValues.appointment)
      )
      setAppointmentSelected(actualAppointment)
    }
  }, [formValues.appointment, pendingAppointments])

  const [vehicle, setVehicle] = useState<IVehicle>()

  const { refetch: vehicleRefetch } = useGetVehicle(
    appointmentSelected?.vehicle.id,
    {
      enabled: false
    }
  )

  const { refetch: mechanicsRefetch, isLoading: mechanicsLoading } =
    useGetAvailableMechanics(appointmentSelected?.date, {
      enabled: false
    })

  useEffect(() => {
    if (!appointmentSelected) return
    vehicleRefetch().then((res) => {
      if (res.data) {
        const vehicleData = res.data.getData()
        setVehicle(vehicleData)
      }
    })
    mechanicsRefetch().then((res) => {
      if (res.data) {
        const mechanics = res.data.getData()
        setMechanics(mechanics)
      }
    })
  }, [appointmentSelected, vehicleRefetch, mechanicsRefetch])

  const [mechanics, setMechanics] = useState<IMechanic[]>()

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-grow flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="appointment"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Turnos pendientes</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  name={field.name}
                >
                  <SelectTrigger id={field.name}>
                    <SelectValue placeholder="Selecciona un turno" />
                  </SelectTrigger>
                  <SelectContent>
                    {pendingAppointments.map((option) => (
                      <SelectItem key={option.id} value={option.id.toString()}>
                        {new Date(option.date).toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {vehicle && (
          <>
            <Card className="p-4">
              <CardTitle className="text-lg">Detalles del vehículo</CardTitle>
              <div className="mt-2">
                <p>
                  <span className="font-semibold">Marca: </span>
                  {vehicle.brand}
                </p>
                <p>
                  <span className="font-semibold">Tipo: </span>
                  {vehicle.type}
                </p>
                <p>
                  <span className="font-semibold">Modelo: </span>
                  {vehicle.model}
                </p>
                <p>
                  <span className="font-semibold">Categoría: </span>
                  {vehicle.category}
                </p>
                <p>
                  <span className="font-semibold">Patente: </span>
                  {vehicle.licensePlate}
                </p>
              </div>
            </Card>
            <FormField
              control={form.control}
              name="mechanic"
              render={({ field }) => (
                <FormItem className="sm:max-w-xs">
                  <FormLabel htmlFor={field.name}>
                    Mecánicos disponibles
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      name={field.name}
                    >
                      <SelectTrigger id={field.name} loading={mechanicsLoading}>
                        <SelectValue placeholder="Selecciona un mecánico" />
                      </SelectTrigger>
                      <SelectContent>
                        {mechanics?.map((option) => (
                          <SelectItem
                            key={option.id}
                            value={option.id.toString()}
                          >
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
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
