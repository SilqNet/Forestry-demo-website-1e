'use client'

import { useEffect, useState } from 'react'

const PRELOADER_DURATION_MS = 3000
const PRELOADER_FADE_OUT_MS = 500
// Preloader configuration
type SitePreloaderProps = {
  children: React.ReactNode
}

export default function SitePreloader({ children }: SitePreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setIsFadingOut(true)
    }, PRELOADER_DURATION_MS)

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ''
      window.dispatchEvent(new Event('site-preloader-finished'))
    }, PRELOADER_DURATION_MS + PRELOADER_FADE_OUT_MS)

    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      {children}
      {isVisible && (
        <div
          className={`logo-loader ${isFadingOut ? 'logo-loader--hidden' : ''}`}
          aria-hidden="true"
        >
          <div className="logo-loader__image flex items-center justify-center text-center">
            <span className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold tracking-widest text-white" style={{ fontFamily: "'Saira Expanded', sans-serif" }}>
              Mežs<span className="text-gold">LV</span>
            </span>
          </div>
        </div>
      )}
    </>
  )
}
