import jwt, { JwtPayload } from 'jsonwebtoken'
import { Payload } from '@/type/payloads'
import cookie from 'js-cookie'

export function jwtVerifyToken(publicKey: string): Payload {
  try {
    const token = cookie.get('jsonwebtoken')
    console.log('Token from cookie:', token) // Debugging line
    if (!token) throw new Error('no token found')
    const payLoad = jwt.verify(token, publicKey) as JwtPayload
    if (payLoad) {
      return {
        status: true,
        payload: payLoad.data,
      }
    }
    throw new Error('invalid token')
  } catch (e: any) {
    console.log('JWT verification error:', e.message) // Debugging line
    return {
      status: false,
      payload: null,
    }
  }
}
