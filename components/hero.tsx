'use client'

import { useEffect, useRef } from 'react'
import { SeamlessVideo } from '@/components/ui/seamless-video'

export default function Hero() {
  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden bg-[#050d0c]">
      {/* Hero Video Background */}
      <SeamlessVideo
        src="/videos/hero-bg.mp4"
        loopThreshold={0.5}
        className="absolute inset-0 w-full h-full scale-[1.12] md:scale-100 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

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
