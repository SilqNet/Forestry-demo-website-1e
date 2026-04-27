'use client'

import { useEffect, useState } from 'react'

const PRELOADER_DURATION_MS = 3000
const PRELOADER_FADE_OUT_MS = 500
const COMPANY_LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png'

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
          className={`site-preloader ${isFadingOut ? 'site-preloader--hidden' : ''}`}
          aria-hidden="true"
        >
          <img
            src={COMPANY_LOGO_URL}
            alt="GR GRUPA logo"
            className="site-preloader__logo"
            loading="eager"
            decoding="sync"
          />
        </div>
      )}
    </>
  )
}
