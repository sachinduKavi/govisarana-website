'use client'

import Navigation from '../navigation'
import Footer from '../footer'
import { usePathname } from 'next/navigation'

export default function PathLayout(props: { children: React.ReactNode }) {
  const path = usePathname()

  if (path === '/admin' || path === '/admin/login') {
    return <>{props.children}</>
  }

  return (
    <>
      {path !== '/' && <Navigation />}
      <main>{props.children}</main>
      {path !== '/' && <Footer />}
    </>
  )
}
