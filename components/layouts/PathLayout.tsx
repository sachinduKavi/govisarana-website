'use client'

import Navigation from '../navigation'
import Footer from '../footer'
import { usePathname } from 'next/navigation'
import Loading from '../Loading'
import { ToastContainer } from 'react-toastify'

export default function PathLayout(props: { children: React.ReactNode }) {
  const path = usePathname()

  if (path === '/admin' || path === '/admin/login') {
    return (
      <main className="relative">
        <Loading />
        <ToastContainer position="top-right" />
        {props.children}
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
