'use client'

import { useUser } from '@/hooks/queries/user'

export default function FormExample({ id }: { id: string }) {
  const { data: userInstance, error, isLoading } = useUser(Number(id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !userInstance) {
    return <div>Error</div>
  }

  const user = userInstance.getData()

  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  )
}
