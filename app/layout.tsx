import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acuna Consulting - Modern AI for Operational People',
  description: 'Rooted in Agile transformation. Supercharged with deployable AI. Premium AI consulting and optimization studio.',
  keywords: 'AI consulting, Agile transformation, enterprise AI, government contracting, digital transformation',
  authors: [{ name: 'Acuna Consulting' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  )
} 