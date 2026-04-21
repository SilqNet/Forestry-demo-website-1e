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
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
              <div className="mb-8 h-[45px] flex items-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                  alt="GR GRUPA"
                  width={160}
                  height={45}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h2 className="text-[32px] md:text-[42px] leading-[1.15] font-bold text-black max-w-[500px]">
                Strādājam ar meža resursiem no meža līdz produktam
              </h2>
          </div>
          <div className="lg:pt-[77px]">
            <p className="text-black/80 text-[16px] leading-[1.7] mb-10 max-w-[600px] font-normal">
              Nodrošinām pilnu ciklu — no apsaimniekošanas un iepirkuma līdz loģistikai un piegādei klientiem vietējā un starptautiskajos tirgos. Darbības pamatā ir caurspīdīga un izsekojama piegādes sistēma, kas nodrošina sertificētus materiālus, stabilus apjomus, kontrolētu kvalitāti un prognozējamu sadarbību ar partneriem.
            </p>
            <a href="#" className="inline-block bg-gold hover:opacity-90 transition-opacity text-white font-semibold px-8 py-4 rounded-none uppercase text-[13px] tracking-wider">
              PAR GR GRUPA
            </a>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-[#0f1211] py-24" ref={sectionRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-items-center">
            {infrastructure.map((item, i) => (
              <div key={i} className="flex flex-col group cursor-default text-center">
                <div className="flex items-center justify-center mb-6">
                  <span className="text-[24px] md:text-[28px] font-bold leading-none text-gold transition-colors duration-300">
                    <AnimatedCounter endValue={item.value} suffix={item.suffix} startAnimation={startAnimation} />
                  </span>
                </div>
                <span className="text-[13px] uppercase tracking-wider text-white font-semibold leading-tight">
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
