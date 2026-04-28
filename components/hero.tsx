'use client'

import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [canPlayVideo, setCanPlayVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const onPreloaderFinished = () => {
      setCanPlayVideo(true)
    }

    if (!document.querySelector('.logo-loader')) {
      setCanPlayVideo(true)
    }

    window.addEventListener('site-preloader-finished', onPreloaderFinished)
    return () => window.removeEventListener('site-preloader-finished', onPreloaderFinished)
  }, [])

  useEffect(() => {
    if (!canPlayVideo) return
    const videoEl = videoRef.current
    if (!videoEl) return

    videoEl.currentTime = 0
    void videoEl.play().catch(() => {
      // Ignore autoplay policy errors.
    })
  }, [canPlayVideo, isMobile])

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
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
