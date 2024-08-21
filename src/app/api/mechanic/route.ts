import { type NextRequest, NextResponse } from 'next/server'

import { MechanicService } from '@/services/mechanic'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const mechanicService = new MechanicService()

  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }

  try {
    const mechanic = await mechanicService.getMechanic(parseInt(id))
    if (!mechanic) {
      return NextResponse.json({ error: 'Mechanic not found' }, { status: 404 })
    }
    return NextResponse.json({ ...mechanic })
  } catch (error) {
    console.error('Error fetching mechanic:', error)
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  const { name, dni, userPassword, userEmail } = await req.json()
  const mechanicService = new MechanicService()
  const newMechanic = await mechanicService.createMechanic(
    { name, dni },
    { email: userEmail, password: userPassword }
  )

  return NextResponse.json(newMechanic)
}
