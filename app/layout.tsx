// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Carla's Candy Creations",
  description: 'Learn the time-honored art of candy making in a warm, welcoming environment. Sweet Learning Since 1897.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}