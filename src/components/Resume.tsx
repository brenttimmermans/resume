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
    <Wrapper>
      <Content>
        <Header />
        <AboutMe />
        <Experiences />
        <Technologies />
        <Languages />
        <Contact />
      </Content>
      <Background />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const CONTENT_PADDING_MOBILE = 30
const CONTENT_PADDING_DESKTOP = 50
const MIN_WIDTH_FOR_PATTERN = 940
const BLUR_RADIUS = 20

const Background = () => {
  const { theme } = useTheme()

  const src = theme === Theme.Dark ? BgTextureDark : BgTextureLight
  return <BaseBackground src={src} />
}

const BaseBackground = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background: url(${props => props.src});
  }
`

const Content = styled.article`
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
