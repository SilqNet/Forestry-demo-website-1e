'use client'

import { useEffect, useRef, useState } from 'react'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'
import Script from 'next/script'

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [player, setPlayer] = useState<any>(null)

  useEffect(() => {
    // Initialize Vimeo player when script is loaded and iframe is ready
    if (typeof window !== 'undefined' && (window as any).Vimeo && iframeRef.current && !player) {
      const vimeoPlayer = new (window as any).Vimeo.Player(iframeRef.current)
      setPlayer(vimeoPlayer)
    }
  }, [player])

  useEffect(() => {
    if (!player || !sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            player.play().catch(() => {
              // Handle potential autoplay block (though muted should be fine)
            })
          } else {
            player.pause().catch(() => {})
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [player])

  return (
    <section ref={sectionRef} className="relative py-24 bg-black">
      <Script 
        src="https://player.vimeo.com/api/player.js" 
        onLoad={() => {
          if (iframeRef.current && !player) {
            const vimeoPlayer = new (window as any).Vimeo.Player(iframeRef.current)
            setPlayer(vimeoPlayer)
          }
        }}
      />
      <div className="absolute inset-0">
        {/* Vimeo Background */}
        <div className="hero-video-wrapper">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1188006685?background=1&autoplay=0&muted=1&loop=1&controls=0&autopause=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="tavs-mezs-ir-vertiba-bg"
          ></iframe>
        </div>

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
