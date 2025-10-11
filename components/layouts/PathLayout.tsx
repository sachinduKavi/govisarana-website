'use client'

import Navigation from '../navigation'
import Footer from '../footer'
import { redirect, usePathname } from 'next/navigation'
import Loading from '../Loading'
import { toast, ToastContainer } from 'react-toastify'
import SidePanel from '../SidePanel'
import Cookies from 'js-cookie'
import { useAppSelector } from '@/hooks/useRedux'
import { RootState } from '@/lib/redux/store'
import { jwtVerifyToken } from '@/middleware/token'
import { errorToast } from '../toast'

export default function PathLayout(props: { children: React.ReactNode }) {
  const fullPathName = usePathname()
  const path = fullPathName.slice(0, 6)
  const publicKey = useAppSelector((state: RootState) => state.publicKeySlice)

  const checkAdminPrevilages = async () => {
    if (fullPathName === '/admin/login') return

    try {
      if (!publicKey) throw new Error('Public key is missing')
      const verified = await jwtVerifyToken(publicKey)
      if (!verified.status) {
        errorToast('You must be logged in to access the admin panel.')
        redirect('/admin/login')
      }
    } catch (e: any) {
      errorToast('You must be logged in to access the admin panel.')
      redirect('/admin/login')
    }
  }

  if (path === '/admin') {
    checkAdminPrevilages()
    return (
      <main className="min-h-screen bg-gray-50">
        <Loading />
        <ToastContainer position="top-right" />

        {/* Admin Layout Container */}
        <div className="flex min-h-screen">
          {/* Side Panel - Fixed on desktop, overlay on mobile */}
          <div className="fixed lg:static inset-y-0 left-0 z-40">{fullPathName !== '/admin/login' && <SidePanel />}</div>

          {/* Main Content Area with proper spacing */}
          <div className="flex-1 lg:ml-0 w-full h-screen overflow-auto">
            <div className="p-4 lg:p-6 w-full">{props.children}</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      {path !== '/' && <Navigation />}
      <main>{props.children}</main>
      {path !== '/' && <Footer />}
    </>
  )
}
