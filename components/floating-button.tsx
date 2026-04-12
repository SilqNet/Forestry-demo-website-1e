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
      className="fixed right-0 z-50"
      style={{
        top: '42%',
        // Slide: when not expanded, push the text portion off-screen to the right
        // The icon (56px/w-14) always stays visible; rest slides in on hover
        transform: expanded ? 'translateX(0)' : 'translateX(0)',
        transition: 'none',
      }}
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => {
        setHoverOpen(false)
        setTapOpen(false)
      }}
    >
      {/*
        Slide-out approach (matching laskana.lv):
        - Outer wrapper is always fixed to right:0
        - Inner flex container slides left by translating left when idle,
          so only the icon tab peeks out from the right edge
        - On hover the full widget (icon + text) slides fully into view
      */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'stretch',
          transform: expanded ? 'translateX(0)' : 'translateX(calc(100% - 56px))',
          transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
        }}
      >
        <Link
          href="#"
          onClick={onClick}
          style={{ clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%)' }}
          className="flex flex-row-reverse items-center bg-[#00a651] text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00a651]"
          aria-label={LABEL}
          aria-expanded={expanded}
        >
          {/* Icon tab — always visible (the "peek" strip) */}
          <div
            className="flex shrink-0 items-center justify-center bg-[#00a651]"
            style={{ width: 56, height: 56, position: 'relative' }}
          >
            {/* Clean "i" — rendered as a styled element, no extra dot */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                fontSize: 26,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1,
                userSelect: 'none',
                display: 'block',
              }}
            >
              i
            </span>
          </div>

          {/* Expandable text label */}
          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <div
              className="flex items-center justify-center text-white font-semibold tracking-wide"
              style={{
                paddingLeft: 24,
                paddingRight: 16,
                height: 56,
                fontSize: 15,
              }}
              aria-hidden={!expanded}
            >
              {LABEL}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
