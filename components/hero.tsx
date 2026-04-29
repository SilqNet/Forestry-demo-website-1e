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
    const videoEl = videoRef.current
    if (!videoEl) return

    // Critical for iOS: ensure muted is set before any play attempt
    videoEl.muted = true
    videoEl.defaultMuted = true

    if (canPlayVideo) {
      const playPromise = videoEl.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed - the 'poster' attribute handles the fallback image
        })
      }
    }
  }, [canPlayVideo])

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        controls={false}
        disablePictureInPicture
        poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile_background-Vc0f2YhPcxs9jF6RNYgxrxg3IG6RRs.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.12] md:scale-100 pointer-events-none"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        onEnded={(e) => {
          const video = e.currentTarget;
          video.currentTime = 0;
          video.play();
        }}
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
