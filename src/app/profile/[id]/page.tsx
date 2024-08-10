import { notFound } from 'next/navigation'

import { getUser } from '@/services/user'

export default async function ProfilePage({
  params
}: {
  params: { id: string }
}) {
  const { id } = params
  const { data } = await getUser(id)

  return (
    <article>
      <h1>Profile</h1>
      <p>Profile page</p>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : notFound()}
    </article>
  )
}
