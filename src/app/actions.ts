'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export default async function revalidate({
  tags,
  path,
  type
}: {
  tags?: string[]
  path?: string
  type?: 'page' | 'layout'
}) {
  if (tags) {
    try {
      for (const tag of tags) {
        revalidateTag(tag)
      }
      return { statusCode: 200, message: 'Revalidation successful' }
    } catch (error) {
      console.error('Revalidation error:', error)
      return { statusCode: 500, message: 'Revalidation failed' }
    }
  }

  if (path) {
    try {
      revalidatePath(path, type)
      return { statusCode: 200, message: 'Revalidation successful' }
    } catch (error) {
      console.error('Revalidation error:', error)
      return { statusCode: 500, message: 'Revalidation failed' }
    }
  }
}
