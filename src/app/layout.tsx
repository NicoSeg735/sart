import '@/app/globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'

import { SonnerProvider, Toaster, TooltipProvider } from '@/components/ui'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Reaction Time',
  description: 'Tienda de productos acuáticos'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-sans antialiased dark:bg-background',
          fontSans.variable
        )}
      >
        <TooltipProvider>{children}</TooltipProvider>
        <SonnerProvider />
        <Toaster />
      </body>
    </html>
  )
}
