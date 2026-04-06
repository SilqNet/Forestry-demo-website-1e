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
      className="fixed right-0 top-[70%] z-30 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22c55e]"
      aria-label={LABEL}
      aria-expanded={expanded}
    >
      <span
        className={`flex items-stretch overflow-hidden rounded-l-2xl bg-[#00a651] text-white shadow-lg transition-[max-width] duration-700 ease-in-out ${
          expanded
            ? 'max-w-[min(100vw-1.5rem,24rem)]'
            : 'max-w-[2.8rem]'
        }`}
      >
        <span className="flex w-11 min-h-[52px] shrink-0 items-center justify-center text-xl font-bold italic">
          i
        </span>
        <span
          className={`flex min-h-[52px] items-center whitespace-nowrap text-[15px] font-semibold leading-tight transition-[opacity,max-width] duration-700 ease-in-out ${
            expanded
              ? 'max-w-[20rem] opacity-100 pr-6'
              : 'max-w-0 overflow-hidden opacity-0 pr-0'
          }`}
          aria-hidden={!expanded}
        >
          {LABEL}
        </span>
      </span>
    </Link>
  )
}
