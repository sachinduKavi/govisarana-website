import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest) {
  try {
    const cookieStore = req.cookies
    const body = await req.json()
    const token = cookieStore.get('jsonwebtoken')?.value ?? null
    if (typeof token === 'string') {
      const verification = jwt.verify(token, body.publicKey)
      if (!verification) throw new Error('Token verification failed')
      return NextResponse.json({ proceed: true, content: verification }, { status: 200 })
    }

    throw new Error('No token provided')
  } catch (e: any) {
    return NextResponse.json({ present: false, error: String(e) }, { status: 500 })
  }
}
