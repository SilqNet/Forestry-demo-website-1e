'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'

const LABEL = 'Uzzini savu meža vērtību'

function prefersTapToggle() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(hover: none)').matches
  )
}

export default function FloatingButton() {
  const [hoverOpen, setHoverOpen] = useState(false)
  const [tapOpen, setTapOpen] = useState(false)

  const expanded = hoverOpen || tapOpen

  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersTapToggle()) {
      e.preventDefault()
      setTapOpen((o) => !o)
    }
  }, [])

  return (
    <Link
      href="#"
      onClick={onClick}
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => {
        setHoverOpen(false)
        setTapOpen(false)
      }}
      className={`fixed right-0 top-[70%] z-30 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00a651] transition-transform ease-in-out ${
        expanded ? 'translate-x-0 duration-300' : 'translate-x-[calc(100%-2.8rem)] duration-700 delay-300'
      }`}
      aria-label={LABEL}
      aria-expanded={expanded}
    >
      <div
        className="flex items-stretch bg-[#00a651] text-white shadow-lg"
      >
        <div className="flex w-11 min-h-[52px] shrink-0 items-center justify-center relative">
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full" />
          <span className="text-xl font-bold mt-1">I</span>
        </div>
        <div
          className="flex min-h-[52px] items-center whitespace-nowrap text-[15px] font-semibold leading-tight pr-6"
          aria-hidden={!expanded}
        >
          {LABEL}
        </div>
      </div>
    </Link>
  )
}
