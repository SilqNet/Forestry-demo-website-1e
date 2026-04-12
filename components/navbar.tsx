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

  const ieperkamSubmenu = [
    { label: 'Pārdot mežu?', href: '#' },
    { label: 'Augošu koku cirsmu iepirkšana', href: '#' },
    { label: 'Zaru iepirkšana šķeldai', href: '#' },
    { label: 'Kokmateriālu iepirkšana pie ceļa', href: '#' },
  ]

  const transportsSubmenu = [
    { label: 'Kokmateriālu pārvadājumi', href: '#' },
    { label: 'Šķeldas un citu beramkravu pārvadājumi', href: '#' },
    { label: 'Smagās tehnikas pārvadājumi', href: '#' },
  ]

  const tirdzniecibaSubmenu = [
    { label: 'Apaļkoka tirdzniecība', href: '#' },
    { label: 'Malka', href: '#' },
  ]

  const mainNavItems = [
    { label: 'Mežu apsaimniekošana', href: '#' },
    { label: 'Iepērkam', href: '#', submenu: ieperkamSubmenu },
    { label: 'Transports / Loģistika', href: '#', submenu: transportsSubmenu },
    { label: 'Kokmateriālu tirdzniecība', href: '#', submenu: tirdzniecibaSubmenu },
    { label: 'Kontakti', href: '#' },
  ]

  const menuItems = [
    { label: 'Mežu apsaimniekošana', href: '#' },
    { label: 'Iepērkam', href: '#', submenu: ieperkamSubmenu },
    { label: 'Transports / Loģistika', href: '#', submenu: transportsSubmenu },
    { label: 'Kokmateriālu tirdzniecība', href: '#', submenu: tirdzniecibaSubmenu },
    { label: 'Kontakti', href: '#' },
    { label: 'Par mums', href: '#' },
  ]

  const linkTone = isScrolled
    ? 'text-[#004225] hover:text-gold'
    : 'text-white hover:text-gold'

  const menuButtonClass = `p-2 bg-transparent shrink-0 transition-all hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
    isScrolled
      ? 'text-[#004225] focus-visible:ring-gold focus-visible:ring-offset-background'
      : 'text-white focus-visible:ring-gold focus-visible:ring-offset-transparent'
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
          <div className="flex h-20 w-full items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                alt="GR GRUPA"
                width={180}
                height={60}
                className="h-[60px] w-auto"
              />
            </Link>

            <div className="hidden md:flex flex-1 min-w-0 justify-between items-center px-2 pl-12 lg:pl-24">
              {/* Main Navigation Items */}
              <div className="flex flex-col gap-2 items-end w-full">
                 {/* Upper Row: Utility & Secondary */}
                <div className="flex justify-end w-full items-center gap-8 h-8">
                  <Link 
                    href="#" 
                    className={`text-[14px] font-normal transition-all ${linkTone}`}
                  >
                    Par mums
                  </Link>
                  
                  <div className="relative group">
                    <button className={`flex items-center gap-1 text-[14px] font-normal transition-all ${linkTone} uppercase`}>
                      LV <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 py-2 w-24 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <button className="w-full px-4 py-2 text-left text-sm text-foreground hover:text-gold transition-colors uppercase">
                        EN
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8 h-10">
                  {mainNavItems.map((item) => (
                    <div key={item.label} className="relative group">
                      {item.submenu ? (
                        <>
                          <button className={`flex items-center gap-1 text-[15px] font-normal transition-all ${linkTone}`}>
                            {item.label} <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                          </button>
                          <div className="absolute top-full left-0 mt-2 py-3 w-64 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-border/50">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                className="block px-6 py-2.5 text-[14px] text-foreground hover:text-gold hover:bg-muted/30 transition-all font-normal border-l-2 border-transparent hover:border-gold"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-[15px] font-normal transition-all ${linkTone}`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="flex items-center ml-8 h-full"
              >
                <button
                  type="button"
                  onClick={toggleMenu}
                  className={`${menuButtonClass} p-1`}
                  aria-expanded={isOpen}
                  aria-controls={MENU_PANEL_ID}
                >
                  {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
                </button>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2 md:gap-3 shrink-0 md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className={menuButtonClass}
                aria-expanded={isOpen}
                aria-controls={MENU_PANEL_ID}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X size={24} strokeWidth={2.5} aria-hidden /> : <Menu size={24} strokeWidth={2.5} aria-hidden />}
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
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full text-left px-3 py-3 text-base font-normal text-foreground hover:bg-muted rounded transition-colors flex items-center justify-between"
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
                      className="block px-3 py-3 text-base font-normal text-foreground hover:bg-muted rounded transition-colors"
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
                  className="block px-3 py-2 text-base font-normal text-foreground hover:bg-muted rounded transition-colors"
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
