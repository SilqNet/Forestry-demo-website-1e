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
      { threshold: 0.5 }
    )

    observer.observe(node)
    
    return () => observer.disconnect()
  }, [])

  const infrastructure = [
    { value: 16, suffix: '+', label: 'GADU PIEREDZE', icon: '/icons/tick.png' },
    { value: 100, suffix: '+', label: 'VEIKSMĪGAS SADARBĪBAS AR MEŽU ĪPAŠNIEKIEM', icon: '/icons/hands.png' },
    { value: 50, suffix: '+', label: 'ILGTERMIŅA SADARBĪBAS PARTNERI', icon: '/icons/hourglass.png' },
    { value: 500, suffix: 'ha+', label: 'APSAIMNIEKOTO ĪPAŠUMU PLATĪBA', icon: '/icons/trees.png' }
  ]

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
                resursiem no meža līdz<br />
                produktam
              </h2>
            </div>
            <div className="lg:w-[55%] lg:pt-[90px]">
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
        <div style={{ width: '100%', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 240px)',
            justifyContent: 'center',
            columnGap: '80px',
            alignItems: 'start',
          }}>
            {infrastructure.map((item, i) => (
              <div key={i} style={{
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }} className="group cursor-default">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  {item.icon && (
                    <Image src={item.icon} alt="" width={28} height={28} className="object-contain" />
                  )}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span className="text-white" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '27.577px', lineHeight: '34.47px', fontWeight: 600, letterSpacing: 'normal', textTransform: 'none' }}>
                      <AnimatedCounter endValue={item.value} suffix="" startAnimation={startAnimation} />
                    </span>
                    <span className="text-white" style={{ fontFamily: "'Saira Expanded', sans-serif", fontSize: '27.577px', lineHeight: '34.47px', fontWeight: 600, letterSpacing: 'normal', textTransform: 'none' }}>{item.suffix}</span>
                  </div>
                </div>
                <span className="text-white" style={{
                  fontFamily: "'Saira', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  letterSpacing: 'normal',
                  textTransform: 'none',
                  width: '100%',
                  textAlign: 'center',
                  display: 'block',
                }}>
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
