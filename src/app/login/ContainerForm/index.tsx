'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Roles from '@/data/roles.json'
import Users from '@/data/users.json'
import { useSession } from '@/stores/session'

export default function ContainerForm() {
  const [error, setError] = useState('')
  const { push } = useRouter()
  const { login } = useSession()
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const email = formData.get('email')
    const password = formData.get('password')

    const userFound = Users.find(
      (user) => user.email === email && user.password === password
    )

    if (!userFound) {
      setError('Credenciales incorrectas')
      return
    }

    const role = Roles.find((role) => role.id === userFound?.role)

    if (!role) {
      setError('Rol no encontrado')
      return
    }

    login(
      {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email
      },
      {
        id: role.id,
        name: role.name
      }
    )

    push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-4 rounded-lg border bg-white p-6 shadow-md"
    >
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
        Iniciar sesión
      </h2>

      <div>
        <label htmlFor="email" className="mb-1 block font-medium text-gray-600">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ingresa tu correo"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1 block font-medium text-gray-600"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <div className="text-destructive">{error}</div>

      <button
        type="submit"
        className="w-full rounded-md bg-black px-4 py-2 text-white transition"
      >
        Ingresar
      </button>
    </form>
  )
}
