'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'

const easeOutQuart = (t: number) => 1 - (--t) * t * t * t

function AnimatedCounter({ endValue, suffix = '', startAnimation = false }: { endValue: number, suffix?: string, startAnimation?: boolean }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (startAnimation && !hasAnimated) {
      setCount(0)
      setHasAnimated(true)
      let startTime: number
      const duration = 2600 // same duration for all counters
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        // Linear progress keeps counting speed consistent (no end-of-animation slowdown).
        const next = Math.min(endValue, Math.round(progress * endValue))
        setCount((prev) => (next > prev ? next : prev))
        
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
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const maybeStart = () => {
      if (hasStartedRef.current) return

      const rect = node.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      // Consider visible when at least ~30% of the section is in view (matches observer threshold).
      const height = Math.max(1, rect.height)
      const visiblePx = Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top)
      const visibleRatio = visiblePx / height

      if (visibleRatio >= 0.3) {
        hasStartedRef.current = true
        setStartAnimation(true)
        return true
      }
      return false
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (hasStartedRef.current) return
        if (entry?.isIntersecting) {
          hasStartedRef.current = true
          setStartAnimation(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    // On initial page load/refresh, trigger immediately if already visible.
    // Run once now and once after paint to account for late layout shifts.
    maybeStart()
    requestAnimationFrame(() => {
      if (maybeStart()) observer.disconnect()
    })
    return () => observer.disconnect()
  }, [])

  const counters = [
    { value: 16, suffix: '+', label: 'GADU PIEREDZE', icon: '/icons/tick.png' },
    { value: 100, suffix: '+', label: 'VEIKSMĪGAS SADARBĪBAS AR MEŽU ĪPAŠNIEKIEM', icon: '/icons/hands.png' },
    { value: 50, suffix: '+', label: 'ILGTERMIŅA SADARBĪBAS PARTNERI', icon: '/icons/hourglass.png' },
    { value: 500, suffix: 'ha+', label: 'APSAIMNIEKOTO ĪPAŠUMU PLATĪBA', icon: '/icons/trees.png' },
    { value: 650, suffix: 'ha+', label: 'ATJAUNOTO MEŽA PLATĪBA', icon: '/icons/recycle.png' },
    { value: 700000, suffix: 'm3+', label: 'IZSTRĀDĀTĀS KOKSNES APJOMS', icon: '/icons/wood.png' },
  ]

  const numberTextStyle: React.CSSProperties = {
    fontFamily: "'Saira Expanded', sans-serif",
    fontSize: '27.577px',
    lineHeight: '34.47px',
    fontWeight: 600,
    letterSpacing: 'normal',
    textTransform: 'none',
  }

  const labelTextStyle: React.CSSProperties = {
    fontFamily: "'Saira', sans-serif",
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: 'normal',
    textTransform: 'none',
  }

  return (
    <section className="bg-white">
      <div className="pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
            <div className="lg:w-[40%]">
              <div className="mb-10 flex items-center">
                <span className="text-gold uppercase" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '28px', fontWeight: 400, lineHeight: '1.2', letterSpacing: 'normal' }}>
                  GR GRUPA
                </span>
              </div>
              <h2 className="text-black mb-8 lg:mb-0" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '28px', fontWeight: 600, lineHeight: '1.2', letterSpacing: 'normal', textTransform: 'none' }}>
                Strādājam ar meža<br />
                resursiem - no stāda līdz<br />
                mežam
              </h2>
            </div>
            <div className="lg:w-[55%] lg:pt-[90px]">
              <div className="max-w-[600px] space-y-8 mb-10 text-black/80 text-left">
                <p style={{ fontFamily: "'Saira', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6', letterSpacing: 'normal', textTransform: 'none' }}>
                  Mums ir izpratne par mežu kā dabisku sistēmu, kas prasa saprātīgu un gudru pieeju. No mūsu turpmākās rīcības un zināšanām veidosies nākotnes mežs – mežs, kādu šobrīd varam tikai iedomāties, bet kāds būtu izveidojams, ievērojot konkrētos dabas apstākļus, priekšrocības un ierobežojumus. Savā darbā ievērojam mežu ilgtspējīgas apsaimniekošanas principus un saudzīgi rīkojamies ar dabas resursiem, lai tiktu saglabāta bioloģiskā daudzveidība un līdzsvars starp trim savstarpēji saistītām dimensijām – vides, ekonomisko un sociālo.
                </p>
              </div>
              <FlowHoverButton asChild>
                <a href="#" className="inline-flex items-center gap-2 rounded-sm border border-black/10 px-8 py-4 text-[15px] font-medium text-black transition-all hover:text-white hover:border-gold active:text-white active:border-gold uppercase tracking-widest">
                <span>PAR GR GRUPA</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 group-active:translate-x-1 transition-transform"
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
              </FlowHoverButton>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#0f1211] py-32" ref={sectionRef}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem', overflow: 'visible' }}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 lg:gap-x-[60px] gap-y-10 lg:gap-y-11">
            {counters.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                style={{
                  width: '100%',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className="group cursor-default"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  {item.icon && <Image src={item.icon} alt="" width={28} height={28} style={{ display: 'block', flexShrink: 0 }} />}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span className="text-white" style={numberTextStyle}>
                      <AnimatedCounter endValue={item.value} suffix="" startAnimation={startAnimation} />
                    </span>
                    <span className="text-white" style={numberTextStyle}>
                      {item.suffix}
                    </span>
                  </div>
                </div>
                <span
                  className="text-white"
                  style={{
                    ...labelTextStyle,
                    width: '100%',
                    maxWidth: '220px',
                    margin: '0 auto',
                    textAlign: 'center',
                    display: 'block',
                  }}
                >
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
