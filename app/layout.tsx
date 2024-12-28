import type { Metadata } from "next"
import "./globals.css"

const title = "Luxe Clinic - EHR"
const description = "A web EHR app for Luxe Clinic staff to manage patient data."

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
