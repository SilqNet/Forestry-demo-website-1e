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
    /*
      Outer wrapper: fixed to right:0, top ~42%, z-50
      Mouse events on outer so hover area includes the full widget

      Inner link: flexbox row → [ICON | TEXT]
        - ICON (56×56) is the leftmost element — always the "tab" that peeks out
        - TEXT label extends to the right

      Slide logic:
        - Idle:   translateX(calc(100% - 56px))
                  → pushes the widget RIGHTWARD so only the 56px icon tab is visible
        - Hovered: translateX(0)
                  → full widget slides into view from the right edge
    */
    <div
      className="fixed right-0 z-50"
      style={{ top: '42%' }}
      onMouseEnter={() => setHoverOpen(true)}
      onMouseLeave={() => {
        setHoverOpen(false)
        setTapOpen(false)
      }}
    >
      <Link
        href="#"
        onClick={onClick}
        className="flex items-center bg-[#00a651] text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#00a651]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 12px 100%)',
          transform: expanded ? 'translateX(0)' : 'translateX(calc(100% - 56px))',
          transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'transform',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        aria-label={LABEL}
        aria-expanded={expanded}
      >
        {/* Icon tab — the leftmost 56px that always stays visible */}
        <div
          style={{
            width: 56,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            backgroundColor: '#00a651',
          }}
        >
          {/* Clean italic serif "i" — single glyph, no extra dots */}
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
              letterSpacing: 0,
            }}
          >
            i
          </span>
        </div>

        {/* Text label — extends to the right of the icon */}
        <div
          aria-hidden={!expanded}
          style={{
            paddingLeft: 20,
            paddingRight: 24,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            fontSize: 15,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            letterSpacing: '0.03em',
          }}
        >
          {LABEL}
        </div>
      </Link>
    </div>
  )
}
