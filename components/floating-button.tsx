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
    <div
      className="fixed right-0 top-1/3 z-30"
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => {
        setHoverOpen(false)
        setTapOpen(false)
      }}
    >
      <Link
        href="#"
        onClick={onClick}
        className="flex flex-row-reverse items-center bg-[#00a651] text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00a651]"
        aria-label={LABEL}
        aria-expanded={expanded}
      >
        <div className="flex w-12 h-12 shrink-0 items-center justify-center relative z-10 bg-[#00a651]">
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-white rounded-full" />
          <span className="text-xl font-bold mt-[2px]">I</span>
        </div>
        <div
          className={`grid transition-[grid-template-columns] duration-500 ease-in-out ${
            expanded ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="px-6 py-0 flex items-center justify-center whitespace-nowrap text-[15px] font-semibold tracking-wide"
              aria-hidden={!expanded}
            >
              {LABEL}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
