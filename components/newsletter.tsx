'use client'

import Script from 'next/script'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'

export default function Newsletter() {
  return (
    <section className="relative py-24 bg-black">
      <div className="absolute inset-0">
        {/* Vimeo Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1188006685?background=1&autoplay=1&muted=1&loop=1&controls=0&autopause=0"
            className="absolute top-1/2 left-1/2"
            style={{
              width: '100vw',
              height: '56.25vw', // Maintain 16:9 aspect ratio
              minWidth: '177.78vh', // Cover height in portrait
              minHeight: '100vh',
              transform: 'translate(-50%, -50%)',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="tavs-mezs-ir-vertiba-bg"
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="text-white mb-6"
          style={{
            fontFamily: "'Saira Expanded', sans-serif",
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '1.2',
            letterSpacing: 'normal',
            textTransform: 'none',
          }}
        >
          <p>Tavs mežs ir vērtība.</p>
          <p>Parūpējies, lai to novērtē pareizi.</p>
        </div>

        <p
          className="text-white/85 mx-auto mb-10 max-w-3xl"
          style={{
            fontFamily: "'Saira', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6',
            letterSpacing: 'normal',
            textTransform: 'none',
          }}
        >
          Iegūsti partneri, kurš pret mežu izturas ar izpratni un ilgtermiņa redzējumu — kā pret unikālu dabas resursu.
          Mēs būsim īstajā vietā, īstajā brīdī.
        </p>

        <FlowHoverButton asChild>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-8 py-4 text-[15px] font-medium text-white transition-all hover:text-white hover:border-gold active:text-white active:border-gold uppercase tracking-widest"
          >
            <span>Sazinies ar mums</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 group-active:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </FlowHoverButton>
      </div>
    </section>
  )
}
