import { type NextRequest, NextResponse } from 'next/server'

import { UserService } from '@/services/user'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const userService = new UserService()

  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }

  try {
    const user = await userService.getUser(parseInt(id))
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json({ ...user })
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const userService = new UserService()
  const newUser = await userService.createUser({ email, password })

  return NextResponse.json(newUser)
}
