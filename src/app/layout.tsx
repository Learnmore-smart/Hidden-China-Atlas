import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hidden China Atlas - Discover the Side of China Most Tourists Never See',
  description: 'Explore hidden gems, lesser-known destinations, and local beauty across China with our interactive map and smart trip planner.',
  openGraph: {
    title: 'Hidden China Atlas',
    description: 'Discover the side of China most tourists never see',
    type: 'website',
    url: 'https://hiddenchinaatlas.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}