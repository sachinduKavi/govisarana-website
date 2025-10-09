import jwt, { JwtPayload } from 'jsonwebtoken'
import { Payload } from '@/type/payloads'

export async function jwtVerifyToken(publicKey: string): Promise<Payload> {
  console.log('Verifying JWT token...') // Debugging line
  try {
    const { cookies } = await import('next/headers')
    const cookieStore = cookies()
    // console.log('Token from cookie:', (await cookieStore).get('jsonwebtoken')?.value) // Debugging line
    // if (!token) throw new Error('no token found')
    // const payLoad = jwt.verify(token, publicKey) as JwtPayload
    // if (payLoad) {
    //   return {
    //     status: true,
    //     payload: payLoad.data,
    //   }
    // }
    throw new Error('invalid token')
  } catch (e: any) {
    console.log('JWT verification error:', e.message) // Debugging line
    return {
      status: false,
      payload: null,
    }
  }
}
