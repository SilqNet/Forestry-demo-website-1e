'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const easeOutQuart = (t: number) => 1 - (--t) * t * t * t

function AnimatedCounter({ endValue, suffix = '', startAnimation = false }: { endValue: number, suffix?: string, startAnimation?: boolean }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (startAnimation && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number
      const duration = 4000 // 4 seconds
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easeProgress = easeOutQuart(progress)
        setCount(Math.floor(easeProgress * endValue))
        
        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setCount(endValue)
        }
      }
      
      requestAnimationFrame(step)
    }
  }, [startAnimation, hasAnimated, endValue])

  return <span ref={nodeRef}>{count}{suffix}</span>
}

export default function WhyUs() {
  const [startAnimation, setStartAnimation] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    
    return () => observer.disconnect()
  }, [])

  const infrastructure = [
    { value: 16, suffix: ' +', label: 'GADU PIEREDZE' },
    { value: 900, suffix: '+', label: 'SADARBĪBAS PARTNERI' },
    { value: 105, suffix: ' +', label: 'DARBINIEKI' },
    { value: 15, suffix: ' +', label: 'VALSTIS' }
  ]

  return (
    <section className="bg-white">
      <div className="pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
            <div className="lg:w-[55%]">
              <div className="mb-10 h-[50px] flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                  alt="GR GRUPA"
                  width={180}
                  height={50}
                  className="h-full w-auto object-contain opacity-90"
                />
              </div>
              <h2 className="text-black mb-8 lg:mb-0" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '28px', fontWeight: 600, lineHeight: '1.2', letterSpacing: 'normal', textTransform: 'none' }}>
                Strādājam ar meža<br />
                resursiem no meža līdz<br />
                produktam
              </h2>
            </div>
            <div className="lg:w-[40%] lg:pt-[90px]">
              <div className="max-w-[600px] space-y-8 mb-10 text-black/80 text-left">
                <p style={{ fontFamily: "'Saira', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6', letterSpacing: 'normal', textTransform: 'none' }}>
                  Mums ir izpratne par mežu kā dabisku sistēmu, kas prasa saprātīgu un gudru pieeju. No mūsu turpmākās rīcības un zināšanām veidosies nākotnes mežs – mežs kādu šobrīd varam tikai iedomāties, bet kāds būtu izveidojams, ievērojot konkrētos dabas apstākļus, priekšrocības un ierobežojumus.
                </p>
                <p style={{ fontFamily: "'Saira', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6', letterSpacing: 'normal', textTransform: 'none' }}>
                  Savā darbā ievērojam mežu ilgtspējas apsaimniekošanas principu un saudzīgi rīkojamies ar dabas resursiem, lai tiktu saglabāta bioloģiskā daudzveidība un līdzsvars starp trīs savstarpēji saistītām dimensijām – vides, ekonomisko un sociālo.
                </p>
              </div>
              <a href="#" className="group inline-flex items-center gap-2 rounded-sm border border-black/10 px-8 py-4 text-[15px] font-medium text-black transition-all hover:bg-gold hover:text-white hover:border-gold uppercase tracking-widest">
                <span>PAR GR GRUPA</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#0f1211] py-32" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {infrastructure.map((item, i) => (
              <div key={i} className="flex flex-col group cursor-default">
                <div className="flex items-baseline gap-1 mb-4 border-b border-white/5 pb-6">
                  <span className="text-[48px] md:text-[64px] font-bold leading-none text-gold transition-transform duration-500 group-hover:scale-105 inline-block">
                    <AnimatedCounter endValue={item.value} suffix="" startAnimation={startAnimation} />
                  </span>
                  <span className="text-[32px] md:text-[40px] font-bold text-gold/80">{item.suffix}</span>
                </div>
                <span className="text-[14px] md:text-[15px] uppercase tracking-[0.15em] text-white/90 font-bold leading-relaxed max-w-[180px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
