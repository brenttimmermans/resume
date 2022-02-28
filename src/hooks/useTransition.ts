import { useEffect } from 'react'

// Only enable transitions on body after initial load to avoid FOUC
export function useTransition() {
  useEffect(() => {
    setTimeout(() => {
      document.body.style.transition = 'var(--transition-bg)'
    }, 0)
  }, [])
}
