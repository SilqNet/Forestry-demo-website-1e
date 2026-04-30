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
  metadataBase: new URL('https://v0-forestry-demo-website.vercel.app/'),
  title: 'Mežsaimniecības pakalpojumi visā Latvijā | GR GRUPA',
  description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. GR GRUPA – uzticams partneris mežā.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: 'https://v0-forestry-demo-website.vercel.app/',
    title: 'Mežsaimniecības pakalpojumi visā Latvijā | GR GRUPA',
    description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. GR GRUPA – uzticams partneris mežā.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GR GRUPA - Profesionāli mežizstrādes pakalpojumi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mežsaimniecības pakalpojumi visā Latvijā | GR GRUPA',
    description: 'Ilgtspējīgi mežu apsaimniekošanas pakalpojumi un meža īpašumu iegāde visā Latvijā. GR GRUPA – uzticams partneris mežā.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
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
