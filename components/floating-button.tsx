'use client'

import { useState } from 'react'

export default function FloatingButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="fixed right-6 md:right-8 top-32 z-30 focus:outline-none"
      aria-label="Uzzini savu mežu vērtību"
    >
      <div
        className={`flex items-center gap-2 bg-primary text-white rounded transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl ${
          isExpanded ? 'pr-3 pl-3 py-2' : 'p-2'
        }`}
        style={{
          width: isExpanded ? 'auto' : '40px',
          minWidth: '40px',
        }}
      >
        <div className="flex items-center justify-center w-6 h-6 bg-white text-primary rounded-sm font-bold text-sm flex-shrink-0">
          i
        </div>
        <span
          className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0 w-0'
          }`}
        >
          Uzzini savu mežu vērtību
        </span>
      </div>
    </button>
  )
}
