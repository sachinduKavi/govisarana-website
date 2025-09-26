import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Suspense } from "react"
import { redirect } from "next/navigation"
import PathLayout from "@/components/layouts/PathLayout"

export const metadata: Metadata = {
  title: "Govisarana - Empowering Farmer Families in Sri Lanka", // Updated title to remove Agricultural Empowerment
  description: "Empowering farmer families through sustainable agriculture, savings programs, and export opportunities",
  applicationName: "NanoSoft Technologies",
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <PathLayout>{children}</PathLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
