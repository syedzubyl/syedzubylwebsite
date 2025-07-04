import type { Metadata } from 'next'
import './globals.css'
import AnimatedBackground from '../components/animated-background'
import Loader from '../components/loader'
import React, { useState, useEffect } from 'react'
import RootLayoutClient from '../components/RootLayoutClient'

export const metadata: Metadata = {
  title: 'Syed Zubyl Portfolio',
  description: 'Portfolio of Syed Zubyl – Mobile App Developer | Contact: syedzubyl96@gmail.com | Tamil Nadu, India',
  generator: 'v0.dev',
  icons: {
    icon: '/images/meeee.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}
