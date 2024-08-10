import { type NextRequest, NextResponse } from 'next/server'

import prisma from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.error()
  }

  const userData = await prisma.user.findUnique({
    where: {
      id
    }
  })

  if (!userData) {
    return NextResponse.error()
  }

  return NextResponse.json({ ...userData })
}
