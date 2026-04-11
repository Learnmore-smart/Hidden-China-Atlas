import type { Metadata } from 'next'
import { Manrope, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Hidden China Atlas - Journey Beyond the Ordinary',
  description: 'Curated escapes, hidden gems, and local beauty across China. Uncover destinations untouched by typical tourist routes.',
  openGraph: {
    title: 'Hidden China Atlas - Curated Journeys',
    description: 'Journey beyond the ordinary. Discover destinations most travelers never see.',
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
        <body className={`${manrope.variable} ${cormorant.variable} font-sans bg-neutral text-primary antialiased`}>
          {children}
        </body>
      </html>
    </LanguageProvider>
  )
}