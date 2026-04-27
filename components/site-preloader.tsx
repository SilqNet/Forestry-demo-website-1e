'use client'

import { useEffect, useState } from 'react'

const PRELOADER_DURATION_MS = 3000
const PRELOADER_FADE_OUT_MS = 500
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
          <svg
            className="site-preloader__logo"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="GR GRUPA logo"
          >
            <g clipPath="url(#preloader-logo-clip)">
              <path
                className="logo-path"
                d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z"
              />
              <path
                className="logo-path"
                d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z"
              />
            </g>
            <defs>
              <clipPath id="preloader-logo-clip">
                <rect width="180" height="180" />
              </clipPath>
            </defs>
          </svg>
        </div>
      )}
    </>
  )
}
