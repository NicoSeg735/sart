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

  return (
    <article>
      <h1>Profile</h1>
      <p>Profile page</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : notFound()}
    </article>
  )
}
