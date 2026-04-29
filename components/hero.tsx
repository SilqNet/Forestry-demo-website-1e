'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const videoEl = videoRef.current
    if (!videoEl) return

    // Critical for iOS: ensure muted is set before any play attempt
    videoEl.muted = true
    videoEl.defaultMuted = true
    
    // Explicitly try to play in case autoPlay is blocked
    const playPromise = videoEl.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay might be blocked by browser policy until user interaction
      })
    }
  }, [])

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-[#050d0c]">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkitPlaysInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.12] md:scale-100 pointer-events-none"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      >
        <source
          src="/videos/hero-bg.mp4"
          type="video/mp4"
        />
      </video>

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
