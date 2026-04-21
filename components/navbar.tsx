'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'

const SlantedHamburger = () => (
  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
    <path
      d="M4 1H34L30 3H0L4 1Z"
      fill="currentColor"
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
    <path
      d="M6 9H33L29 11H2L6 9Z"
      fill="currentColor"
      className="transition-transform duration-300 group-hover:-translate-x-1"
    />
    <path
      d="M5 17H34L30 19H1L5 17Z"
      fill="currentColor"
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </svg>
)

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

  const menuButtonClass = `group p-2 bg-transparent shrink-0 transition-all hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
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

            <div className="hidden md:flex flex-1 min-w-0 items-center justify-end px-2 pl-8 lg:pl-16">
              {/* Main Navigation Items */}
              <div className="flex items-center gap-2 lg:gap-4 h-10">
                {mainNavItems.map((item) => (
                  <div key={item.label} className="relative group h-full flex items-center">
                    {item.submenu ? (
                      <>
                        <button className={`flex items-center gap-1 h-full px-2 lg:px-3 text-[14px] lg:text-[15px] font-normal transition-all group-hover:bg-white group-hover:text-gold ${isScrolled ? 'text-[#004225]' : 'text-white'} ${linkTone}`}>
                          {item.label} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                        </button>
                        <div className="absolute top-full left-0 py-3 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-border/50 border-t-0" style={{width: 'max-content', minWidth: 0}}>
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-6 py-2.5 text-[14px] text-foreground hover:text-gold hover:bg-muted/30 transition-all font-normal border-l-2 border-transparent hover:border-gold whitespace-nowrap"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[14px] lg:text-[15px] px-2 lg:px-3 font-normal transition-all ${linkTone}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Utility Items integrated into the same row */}
                <div className="relative group h-full flex items-center">
                  <button className={`flex items-center gap-1 h-full px-2 lg:px-3 text-[14px] font-normal transition-all group-hover:bg-white group-hover:text-gold ${isScrolled ? 'text-[#004225]' : 'text-white'} ${linkTone}`}>
                    Par mums <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 py-2 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-border/50 border-t-0" style={{width: 'max-content'}}>
                    <Link href="#" className="block px-4 py-2 text-sm text-foreground hover:text-gold transition-colors text-left whitespace-nowrap">
                      Jaunumi
                    </Link>
                  </div>
                </div>

                <div className="relative group h-full flex items-center">
                  <button className={`flex items-center gap-1 h-full px-2 lg:px-3 text-[14px] font-normal transition-all group-hover:bg-white group-hover:text-gold ${isScrolled ? 'text-[#004225]' : 'text-white'} ${linkTone}`}>
                    Lv <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full right-0 py-1 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 border border-border/50 border-t-0" style={{width: 'max-content', minWidth: 0}}>
                    <button className="px-4 py-2 text-left text-sm text-foreground hover:text-gold transition-colors whitespace-nowrap block">
                      En
                    </button>
                  </div>
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
                  {isOpen ? <X size={28} strokeWidth={1.5} /> : <SlantedHamburger />}
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
                {isOpen ? <X size={28} strokeWidth={1.5} aria-hidden /> : <SlantedHamburger />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          id={MENU_PANEL_ID}
          className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          role="navigation"
          aria-label="Navigation menu"
          style={{ animation: 'slideIn 0.3s ease-out' }}
        >
          {/* Header inside menu */}
          <div className="w-full h-20 md:h-24 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <Link href="/" onClick={() => setIsOpen(false)} className="shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                alt="GR GRUPA"
                width={180}
                height={60}
                className="h-[60px] w-auto"
              />
            </Link>
            
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-black hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X size={36} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu contents */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 pb-20 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Column 1 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-2">
                    Mežu apsaimniekošana
                  </Link>
                </div>
                
                <div>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-4">
                    Iepērkam
                  </Link>
                  <ul className="space-y-3 pl-2 border-l border-black/10">
                    {ieperkamSubmenu.map(item => (
                      <li key={item.label}>
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="text-base text-black/70 hover:text-gold transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-4">
                    Transports / Loģistika
                  </Link>
                  <ul className="space-y-3 pl-2 border-l border-black/10">
                    {transportsSubmenu.map(item => (
                      <li key={item.label}>
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="text-base text-black/70 hover:text-gold transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-4">
                    Kokmateriālu tirdzniecība
                  </Link>
                  <ul className="space-y-3 pl-2 border-l border-black/10">
                    {tirdzniecibaSubmenu.map(item => (
                      <li key={item.label}>
                        <Link href={item.href} onClick={() => setIsOpen(false)} className="text-base text-black/70 hover:text-gold transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <Link href="#" onClick={() => setIsOpen(false)} className="block text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-2">
                    Kontakti
                  </Link>
                </div>
                
                <div>
                  <div className="group relative w-max">
                    <Link href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-2xl md:text-[28px] font-medium text-black hover:text-gold transition-colors mb-4 cursor-pointer">
                      Par mums <ChevronDown size={20} className="group-hover:rotate-180 transition-transform hidden lg:block" />
                    </Link>
                    {/* The submenu under Par mums as a list item for mobile */}
                  </div>
                  <ul className="space-y-3 pl-2 border-l border-black/10">
                    <li>
                      <Link href="#" onClick={() => setIsOpen(false)} className="text-base text-black/70 hover:text-gold transition-colors">
                        Jaunumi
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <div className="flex items-center gap-4 text-lg">
                    <span className="font-medium text-black">Lv</span>
                    <span className="text-black/30">|</span>
                    <Link href="#" className="text-black/60 hover:text-gold transition-colors">En</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
