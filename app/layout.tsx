import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat" 
});

const _inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: 'GR GRUPA - Profesionāli mežizstrādes pakalpojumi',
  description: 'Ilgtspējīga mežizstrāde, transports un meža apsaimniekošanas pakalpojumi Latvijā. GR GRUPA - Jūsu uzticamais partneris mežā.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv">
      <body className={`${_montserrat.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
