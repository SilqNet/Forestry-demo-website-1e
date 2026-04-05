'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

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

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

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
    { label: 'Iepirkam', href: '#' },
    { label: 'Sthidora pakalpojumi', href: '#' },
    { label: 'Transports / Logistika', href: '#' },
    { label: 'Par mums', href: '#' },
    { label: 'Vakances', href: '#' },
    { label: 'Lemontdarbnīca', href: '#' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GR_GRUPA_idKuYPu1P0_0-bVHcO5QoufDlT9oMbc8MWmHEZEcl88.png"
                alt="GR GRUPA"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                      isScrolled
                        ? 'text-foreground hover:text-primary'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={16} />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-48 bg-primary rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
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
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-4">
              <select
                className={`text-sm bg-transparent border rounded px-2 py-1 transition-colors ${
                  isScrolled
                    ? 'text-foreground border-border'
                    : 'text-white border-white/30'
                }`}
              >
                <option value="lv" style={{ color: '#000' }}>LV</option>
                <option value="en" style={{ color: '#000' }}>EN</option>
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Menu background - full viewport */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              animation: 'slideDown 300ms ease-out',
              top: '64px',
              height: 'calc(100vh - 64px)',
            }}
          >
            {/* Menu content */}
            <div className="px-4 py-8 max-h-screen overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => item.submenu && toggleDropdown(item.label)}
                    className="w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.submenu && openDropdown === item.label && (
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
                </div>
              ))}

              {/* Mobile Language Selector */}
              <div className="mt-6 pt-6 border-t border-border">
                <select
                  className="w-full text-sm bg-muted text-foreground border border-border rounded px-3 py-2 transition-colors"
                >
                  <option value="lv">Latviešu (LV)</option>
                  <option value="en">English (EN)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Right-side Floating Button - REMOVED, moved to separate component */}

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
