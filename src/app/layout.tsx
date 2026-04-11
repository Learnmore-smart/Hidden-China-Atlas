import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

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
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans bg-[#F9F9F7] text-[#1A1A1A] antialiased selection:bg-[#E5EAE3] selection:text-[#1A1A1A]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}