"use client"

import { redirect } from "next/navigation"

export default function LockPage() {
  redirect("/home");

  return (
    <h1>Lock page</h1>
  )
}
