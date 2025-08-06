// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { instrumentSerif, displayFont } from './fonts'

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
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${instrumentSerif.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}