// app/fonts.ts
import { Instrument_Serif, Dancing_Script } from 'next/font/google'

// Instrument Serif for body text - only supports weight 400
export const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
})

// Keep Dancing Script as backup
export const displayFont = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-backup'
})

// We'll use CSS import for Lavishly Yours since it's not in next/font yet