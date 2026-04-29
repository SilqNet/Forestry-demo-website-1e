'use client'

import { useState, useEffect, useRef } from 'react'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'

export default function Newsletter() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    const videoEl = videoRef.current
    if (!sectionEl || !videoEl) return

    videoEl.muted = true
    videoEl.defaultMuted = true
    videoEl.playsInline = true

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          videoEl.play().catch(() => {})
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionEl)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleCanPlayThrough = () => {
    setIsVideoLoaded(true)
  }

  return (
    <section ref={sectionRef} className="relative py-24 bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          onCanPlayThrough={handleCanPlayThrough}
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        >
          <source src="/videos/tavs-mezs-ir-vertiba-bg-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
          <source src="/videos/tavs-mezs-ir-vertiba-bg.mp4" type="video/mp4" />
        </video>

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
