'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'

function prefersTapToggle() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(hover: none)').matches
  )
}

interface WidgetProps {
  icon: string
  labelLine1: string
  labelLine2: string
  href: string
  disableNavigation?: boolean
  onClick?: () => void
}

function SideWidget({ icon, labelLine1, labelLine2, href, disableNavigation = false, onClick: propOnClick }: WidgetProps) {
  const [hoverOpen, setHoverOpen] = useState(false)
  const [tapOpen, setTapOpen] = useState(false)

  const expanded = hoverOpen || tapOpen

  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disableNavigation) {
      e.preventDefault()
      e.stopPropagation()
      if (propOnClick) {
        propOnClick()
      }
      return
    }
    if (prefersTapToggle()) {
      e.preventDefault()
      setTapOpen((o) => !o)
    }
  }, [disableNavigation, propOnClick])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (!disableNavigation) return
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        e.stopPropagation()
        if (propOnClick) {
          propOnClick()
        }
      }
    },
    [disableNavigation, propOnClick]
  )

  return (
    <div className="relative flex justify-end">
      <Link
        href={href}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHoverOpen(true)}
        onMouseLeave={() => {
          setHoverOpen(false)
          setTapOpen(false)
        }}
        className="flex items-center bg-[#C5A059] text-white shadow-lg transition-transform duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#C5A059]"
        style={{
          clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%)',
          transform: expanded ? 'translateX(0)' : 'translateX(calc(100% - 64px))',
          width: 'max-content',
          minWidth: 64,
          height: 64,
        }}
        aria-expanded={expanded}
        role={disableNavigation ? "button" : undefined}
        tabIndex={0}
      >
        {/* Icon Container — the leftmost ~64px */}
        <div className="w-[64px] h-[64px] flex items-center justify-center shrink-0 pl-[12px]">
          <Image 
            src={icon} 
            alt="" 
            width={32} 
            height={32} 
            className="object-contain"
          />
        </div>

        {/* Text Container — reveals on hover */}
        <div
          className={`flex flex-col justify-center pr-8 pl-4 h-full transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}
          style={{ whiteSpace: 'nowrap' }}
        >
          <p className="text-[14px] font-bold leading-[1.2] tracking-tight">{labelLine1}</p>
          <p className="text-[14px] font-bold leading-[1.2] tracking-tight">{labelLine2}</p>
        </div>
      </Link>
    </div>
  )
}

import { OfferModal } from './offer-modal'

export default function FloatingButton() {
  const [offerModalOpen, setOfferModalOpen] = useState(false)

  return (
    <div
      className="fixed right-0 z-50 flex flex-col gap-3"
      style={{ top: '40%' }}
    >
      <SideWidget
        icon="/icons/problem.png"
        labelLine1="Uzzini savu"
        labelLine2="meža vērtību"
        href="#"
        disableNavigation
        onClick={() => setOfferModalOpen(true)}
      />
      <SideWidget
        icon="/icons/whatsapp.png"
        labelLine1="Sazinies ar"
        labelLine2="WhatsApp"
        href="#"
      />
      <OfferModal open={offerModalOpen} onOpenChange={setOfferModalOpen} />
    </div>
  )
}
