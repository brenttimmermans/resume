import { useEffect } from 'react'
import createPersistedState from 'use-persisted-state'

const STATE_KEY = 'user_theme'
const useThemeState = createPersistedState(STATE_KEY)

export enum Theme {
  Light,
  Dark,
}

type ThemeHook = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggle: () => void
}

export function useTheme(): ThemeHook {
  const [theme, setTheme] = useThemeState<Theme>(
    window.matchMedia('(prefers-color-scheme: dark)')
      ? Theme.Dark
      : Theme.Light,
  )

  const toggle = () => {
    setTheme(theme => (theme === Theme.Dark ? Theme.Light : Theme.Dark))
  }

  // Add theme class for site based toggling
  useEffect(() => {
    const root = document.querySelector(':root')

    if (theme === Theme.Dark) {
      root.classList.add('dark-mode')
      root.classList.remove('light-mode')
    }

    if (theme === Theme.Light) {
      root.classList.add('light-mode')
      root.classList.remove('dark-mode')
    }
  }, [theme])

  // Listen for a change of theme from OS
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const listener = e => {
      const newTheme = e.matches ? Theme.Dark : Theme.Light
      setTheme(newTheme)
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  return { theme, setTheme, toggle }
}
