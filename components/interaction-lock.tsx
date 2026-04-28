'use client'

import { useEffect } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-lock-interaction], input[type="submit"], input[type="button"]'

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest(INTERACTIVE_SELECTOR))
}

export default function InteractionLock() {
  useEffect(() => {
    const preventAction = (event: Event) => {
      if (!isInteractiveTarget(event.target)) return
      event.preventDefault()
      event.stopPropagation()
    }

    const preventKeyboardAction = (event: KeyboardEvent) => {
      if (!isInteractiveTarget(event.target)) return
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      event.stopPropagation()
    }

    document.addEventListener('click', preventAction, true)
    document.addEventListener('submit', preventAction, true)
    document.addEventListener('keydown', preventKeyboardAction, true)

    return () => {
      document.removeEventListener('click', preventAction, true)
      document.removeEventListener('submit', preventAction, true)
      document.removeEventListener('keydown', preventKeyboardAction, true)
    }
  }, [])

  return null
}
