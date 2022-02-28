import styled from 'styled-components'

import Header from '~/src/components/Header'
import AboutMe from '~/src/components/AboutMe'
import Experiences from '~/src/components/Experiences'
import Technologies from '~/src/components/Technologies'
import Languages from '~/src/components/Languages'
import Contact from '~/src/components/Contact'
import { useTheme, Theme } from '~/src/hooks/useTheme'

import BgTextureLight from '~/src/assets/images/background/light.svg'
import BgTextureDark from '~/src/assets/images/background/dark.svg'

export default function Resume() {
  return (
    <Background>
      <Wrapper>
        <Header />
        <AboutMe />
        <Experiences />
        <Technologies />
        <Languages />
        <Contact />
      </Wrapper>
    </Background>
  )
}

const CONTENT_PADDING_MOBILE = 30
const CONTENT_PADDING_DESKTOP = 50
const MIN_WIDTH_FOR_PATTERN = 940
const BLUR_RADIUS = 20

const Background = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()

  return theme === Theme.Dark ? (
    <DarkBackground>{children}</DarkBackground>
  ) : (
    <LightBackground>{children}</LightBackground>
  )
}

const LightBackground = styled.div`
  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background-image: url(${BgTextureLight});
  }
`

const DarkBackground = styled.div`
  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background-image: url(${BgTextureDark});
  }
`

const Wrapper = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 70px ${CONTENT_PADDING_MOBILE}px;

  // Add blur effect
  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background: linear-gradient(
      to right,
      var(--color-bg-transparent) 0%,
      var(--color-bg-transition) ${BLUR_RADIUS}px,
      var(--color-bg) ${BLUR_RADIUS}px,
      var(--color-bg) calc(100% - ${BLUR_RADIUS}px),
      var(--color-bg-transition) calc(100% - ${BLUR_RADIUS}px),
      var(--color-bg-transparent) 100%
    );

    // Add additional padding to compensate for blur
    padding-left: ${CONTENT_PADDING_DESKTOP + BLUR_RADIUS}px;
    padding-right: ${CONTENT_PADDING_DESKTOP + BLUR_RADIUS}px;
  }

  article + article {
    margin-top: var(--spacing-L);
  }
`
