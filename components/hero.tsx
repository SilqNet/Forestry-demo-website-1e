'use client'

import Script from 'next/script'

export default function Hero() {
  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-black">
      {/* Hero Vimeo Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1188002745?background=1&autoplay=1&muted=1&loop=1&controls=0&autopause=0"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full"
          style={{
            width: '177.78vh',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            minWidth: '100vw',
            minHeight: '56.25vw',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          title="hero-bg"
        />
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full w-full flex-col items-start justify-end text-left px-4 md:px-12 lg:px-20 pb-12 md:pb-16">
        <h1 className="max-w-5xl text-left text-[30px] md:text-[42px] text-white leading-[1.12] mb-4" style={{ fontFamily: "'Saira Expanded', sans-serif", fontWeight: 600, letterSpacing: 'normal', textTransform: 'none' }}>
          Uzticams partneris mežsaimniecībā jau vairāk nekā 15 gadus visā Latvijā
        </h1>
      </div>
    </section>
  )
}

