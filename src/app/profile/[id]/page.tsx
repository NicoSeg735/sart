import { notFound } from 'next/navigation'

import { userService } from '@/services/user'

import FormExample from './Form'

export default async function ProfilePage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  if (!id || isNaN(parseInt(id))) {
    return notFound()
  }

  const { data: userInstance, error } = await userService.getUserById(
    Number(id)
  )

  if (error || !userInstance) {
    return notFound()
  }

  const userData = userInstance.getData()

  return (
    <article className="flex flex-grow flex-col p-8">
      <h1 className="text-xl font-bold">Perfil</h1>
      <h2 className="text-lg font-semibold">Datos del usuario</h2>
      <div className="mt-4 flex flex-col gap-1">
        <p>
          <span className="font-semibold">ID:</span> {userData.id}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {userData.email}
        </p>
      </div>
      <FormExample id={id} />
    </article>
  )
}
