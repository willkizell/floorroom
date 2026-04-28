import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FloorRoom — Throws Coaching Marketplace",
  description: "The marketplace and operating system for serious throws coaching. Find coaches for shot put, discus, hammer, and javelin.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  )
}
