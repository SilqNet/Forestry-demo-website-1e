'use client'

import Link from 'next/link'
import { useCallback, useState, useEffect } from 'react'

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const expanded = hoverOpen || tapOpen

  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersTapToggle()) {
      e.preventDefault()
      setTapOpen((o) => !o)
    }
  }, [])

  return (
    <div
      className={`fixed right-0 top-[60%] z-30 transition-transform duration-500 ease-in-out ${isScrolled ? 'translate-x-[calc(100%-8px)] opacity-60' : 'translate-x-0 opacity-100'}`}
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
        style={{ clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%)' }}
        aria-label={LABEL}
        aria-expanded={expanded}
      >
        <div className="flex w-14 h-14 shrink-0 items-center justify-center relative z-10 bg-[#00a651]">
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-white rounded-full" />
          <span className="text-2xl font-bold mt-[2px]">i</span>
        </div>
        <div
          className={`grid transition-[grid-template-columns] duration-500 ease-in-out ${
            expanded ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="pl-6 pr-4 py-0 flex items-center justify-center whitespace-nowrap text-[15px] font-semibold tracking-wide"
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
