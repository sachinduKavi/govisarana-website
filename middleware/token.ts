import { jwtVerify, importSPKI } from 'jose'
import cookies from 'js-cookie'
import { Payload } from '@/type/payloads'
import { error } from 'console'
import axios from 'axios'

export async function jwtVerifyToken(publicKey: string): Promise<Payload> {
  try {
    const token = cookies.get('jsonwebtoken') || null
    const response = await axios.post('/api/debug/cookies', { publicKey, token })
    if (response.status === 200 && response.data.proceed) {
      return { status: true, payload: response.data.content as Payload }
    }
    throw new Error('Token verification is currently disabled for testing purposes.')
  } catch (e: any) {
    return { status: false, payload: e.message || 'Token verification failed' }
  }
}
