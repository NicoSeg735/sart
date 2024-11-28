import '@/app/globals.css'
import 'reflect-metadata'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import { SonnerProvider, Toaster, TooltipProvider } from '@/components/ui'
import { ReactQueryProvider } from '@/contexts/react-query/ReactQueryProvider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'SART (Sistema Automatizado de Revisiones Técnicas)',
  description: 'Sistema Automatizado de Revisiones Técnicas'
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
        <TooltipProvider>
          <ReactQueryProvider>
            <Header />
            <main className="flex flex-grow flex-col items-center gap-8 space-y-8 p-16">
              <Hero />
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </TooltipProvider>
        <SonnerProvider />
        <Toaster />
      </body>
    </html>
  )
}
