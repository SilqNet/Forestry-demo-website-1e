'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laskana_idu8tcMQMk_0-RIvPGKSn4kvQftBCCaxsEFMEiuHRbP.png"
              alt="LASKANA"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
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
            <button className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v16.5A2.25 2.25 0 003.75 22.5h16.5a2.25 2.25 0 002.25-2.25V13.5m-21-9h21m-21 3h21" />
              </svg>
            </button>
            <select className="text-sm text-foreground bg-transparent border border-border rounded px-2 py-1">
              <option>LV</option>
              <option>EN</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors flex items-center justify-between"
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
                  <div className="pl-4 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
