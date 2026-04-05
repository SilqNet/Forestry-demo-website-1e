'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const MENU_PANEL_ID = 'site-navigation-panel'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  const navItems = [
    {
      label: 'Mežu apsaimniekošana',
      href: '#',
      submenu: [
        { label: 'Pārdot mežu?', href: '#' },
        { label: 'Zaru lepirkšana šķeldai', href: '#' },
        { label: 'Augoša koku cirsmā lepirkšana', href: '#' },
        { label: 'Lepirkam kokmaterials pie ceja', href: '#' },
        { label: 'lepirkumi ostās', href: '#' },
      ],
    },
    { label: 'Iepērkam', href: '#' },
    { label: 'Transports / Loģistika', href: '#' },
    { label: 'Kokmateriālu tirdzniecība', href: '#' },
    { label: 'Kontakti', href: '#' },
  ]

  const linkTone = isScrolled
    ? 'text-foreground hover:text-primary'
    : 'text-white hover:text-white/80'

  const menuButtonClass = `p-2 bg-transparent shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    isScrolled
      ? 'text-foreground focus-visible:ring-primary focus-visible:ring-offset-background'
      : 'text-white focus-visible:ring-white focus-visible:ring-offset-transparent'
  }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 w-full items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                alt="GR GRUPA"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden md:flex flex-1 min-w-0 justify-center items-center px-2">
              <div className="flex flex-wrap items-center justify-center gap-1">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${linkTone}`}
                        >
                          {item.label}
                          <ChevronDown size={16} aria-hidden />
                        </button>
                        <div className="absolute left-0 mt-0 w-48 bg-primary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="py-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                className="block px-4 py-2 text-sm text-white hover:bg-primary-foreground/10 transition-colors"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1 ${linkTone}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2 md:gap-3 shrink-0">
              <Link
                href="#"
                className={`hidden md:inline text-sm font-medium transition-colors ${linkTone}`}
              >
                Par mums
              </Link>
              <select
                aria-label="Valoda"
                className={`hidden md:block text-sm bg-transparent border rounded px-2 py-1 transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-foreground border-border'
                    : 'text-white border-white/30'
                }`}
              >
                <option value="lv" style={{ color: '#000' }}>
                  Lv
                </option>
                <option value="en" style={{ color: '#000' }}>
                  EN
                </option>
              </select>
              <button
                type="button"
                onClick={toggleMenu}
                className={menuButtonClass}
                aria-expanded={isOpen}
                aria-controls={MENU_PANEL_ID}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X size={24} strokeWidth={2} aria-hidden /> : <Menu size={24} strokeWidth={2} aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          id={MENU_PANEL_ID}
          className="fixed inset-0 z-[35] pt-16"
          role="navigation"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 top-16 bg-white overflow-y-auto"
            style={{
              animation: 'slideDown 300ms ease-out',
            }}
          >
            <div className="px-4 py-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded transition-colors flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform shrink-0 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          aria-hidden
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-6 py-2 bg-muted/50 rounded">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              onClick={() => {
                                setIsOpen(false)
                                setOpenDropdown(null)
                              }}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded transition-colors"
                >
                  Par mums
                </Link>
                <select
                  aria-label="Valoda"
                  className="w-full text-sm bg-muted text-foreground border border-border rounded px-3 py-2 transition-colors"
                >
                  <option value="lv">Latviešu (Lv)</option>
                  <option value="en">English (EN)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
