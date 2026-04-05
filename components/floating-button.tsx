'use client'

export default function FloatingButton() {
  return (
    <button className="fixed right-6 bottom-20 md:right-8 md:top-1/2 md:-translate-y-1/2 z-30 group flex items-center gap-3 bg-accent hover:bg-accent/90 text-primary px-4 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:px-6">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.5 3A1.5 1.5 0 011 4.5v11A1.5 1.5 0 012.5 17h15a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0117.5 3h-15zm0 2h15v11h-15v-11z" />
        <path d="M4 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5A.5.5 0 004 6z" />
      </svg>
      <span className="hidden group-hover:inline-block text-sm font-medium whitespace-nowrap">
        Uzzini savu mežu vērtību
      </span>
    </button>
  )
}
