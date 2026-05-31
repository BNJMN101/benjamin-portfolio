import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akinjiyan Benjamin — Full Stack Developer',
  description:
    'Full Stack Developer building fast, scalable, and modern web applications focused on performance, clean UI, and great user experience.',
  keywords: [
    'Akinjiyan Benjamin',
    'Full Stack Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Akinjiyan Benjamin' }],
  creator: 'Akinjiyan Benjamin',
  metadataBase: new URL('https://your-domain.com'),

  openGraph: {
    title: 'Akinjiyan Benjamin — Full Stack Developer',
    description:
      'Building modern digital experiences with code. Fast, scalable, and beautiful web applications.',
    type: 'website',
    siteName: 'Akinjiyan Benjamin Portfolio',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Akinjiyan Benjamin — Full Stack Developer',
    description:
      'Building fast, scalable, and modern web applications with clean UI and great UX.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark bg-background`}>
      <body className="font-sans antialiased">{children}</body>

      {process.env.NODE_ENV === 'production' && <Analytics />}
    </html>
  )
}