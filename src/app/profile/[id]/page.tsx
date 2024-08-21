import { notFound } from 'next/navigation'

import { UserService } from '@/services/user'

export default async function ProfilePage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  if (!id || isNaN(parseInt(id))) {
    return notFound()
  }
  const userService = new UserService()
  const data = await userService.getUser(Number(id))

  if (!data) {
    return notFound()
  }

  return (
    <article className="flex flex-grow flex-col p-8">
      <h1 className="text-xl font-bold">Perfil</h1>
      <h2 className="text-lg font-semibold">Datos del usuario</h2>
      <div className="mt-4 flex flex-col gap-1">
        <p>
          <span className="font-semibold">ID:</span> {data.id}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {data.email}
        </p>
      </div>
    </article>
  )
}
