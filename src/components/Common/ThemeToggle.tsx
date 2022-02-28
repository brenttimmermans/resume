import styled from 'styled-components'
import { Theme, useTheme } from '~/src/hooks/useTheme'

import Sun from '~/src/assets/images/dark-mode/sun.svg'
import Moon from '~/src/assets/images/dark-mode/moon.svg'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  const handleToggle = () => toggle()

  return (
    <Icon onClick={handleToggle}>
      {theme === Theme.Dark ? <Moon /> : <Sun />}
    </Icon>
  )
}

const Icon = styled.div`
  max-height: 30px;
  max-width: 30px;
  cursor: pointer;
`
