'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'

const LABEL = 'Uzzini savu mežu vērtību'

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
      className="fixed right-0 top-[42%] z-30 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22c55e]"
      aria-label={LABEL}
      aria-expanded={expanded}
    >
      <span
        className={`flex items-stretch overflow-hidden rounded-l-md bg-[#22c55e] text-white shadow-md transition-[max-width] duration-300 ease-out ${
          expanded
            ? 'max-w-[min(100vw-1.5rem,20rem)]'
            : 'max-w-[2.75rem]'
        }`}
      >
        <span
          className={`flex min-h-12 items-center whitespace-nowrap text-sm font-medium leading-tight transition-[opacity,padding,max-width] duration-300 ease-out ${
            expanded
              ? 'max-w-[min(100vw-4rem,17rem)] opacity-100 pl-3 pr-1'
              : 'max-w-0 overflow-hidden opacity-0 pl-0 pr-0'
          }`}
          aria-hidden={!expanded}
        >
          {LABEL}
        </span>
        <span className="flex w-11 min-h-12 shrink-0 items-center justify-center text-base font-bold">
          i
        </span>
      </span>
    </Link>
  )
}
