import styled from 'styled-components'
import { Theme, useTheme } from '~/src/hooks/useTheme'

import Sun from '~/src/assets/images/dark-mode/sun.svg'
import Moon from '~/src/assets/images/dark-mode/moon.svg'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  const handleToggle = () => toggle()

  return (
    <ToggleWrapper>
      <Icon active={theme === Theme.Dark} onClick={handleToggle}>
        <Moon />
      </Icon>
      <Icon active={theme === Theme.Light} onClick={handleToggle}>
        <Sun />
      </Icon>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.div`
  position: relative;
`

const Icon = styled.div<{ active: boolean }>`
  height: 30px;
  width: 30px;
  cursor: pointer;

  position: absolute;

  transition: opacity 250ms ease-in;
  opacity: ${props => (props.active ? '1' : '0')};
`
