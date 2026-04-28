import type { Metadata } from 'next'
import { Montserrat, Inter, Saira } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import FloatingButton from '@/components/floating-button'
import SitePreloader from '@/components/site-preloader'
import InteractionLock from '@/components/interaction-lock'
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

const _saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-saira"
});

export const metadata: Metadata = {
  title: 'GR GRUPA - Profesionāli mežizstrādes pakalpojumi',
  description: 'Ilgtspējīga mežizstrāde, transports un meža apsaimniekošanas pakalpojumi Latvijā. GR GRUPA - Jūsu uzticamais partneris mežā.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv">
      <body className={`${_montserrat.variable} ${_inter.variable} ${_saira.variable} font-sans antialiased`}>
        <SitePreloader>
          <InteractionLock />
          <FloatingButton />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
          <SpeedInsights />
        </SitePreloader>
      </body>
    </html>
  )
}
