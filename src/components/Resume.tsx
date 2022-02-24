import styled from 'styled-components'

import Header from '~/src/components/Header'
import AboutMe from '~/src/components/AboutMe'
import Experiences from '~/src/components/Experiences'
import Technologies from '~/src/components/Technologies'
import Languages from '~/src/components/Languages'
import Contact from '~/src/components/Contact'

import BgTexture from '~/src/assets/images/texture.svg'

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

const CONTENT_PADDING = 30
const MIN_WIDTH_FOR_PATTERN = 940
const BLUR_RADIUS = 60

const Background = styled.div`
  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background-image: url(${BgTexture});
  }
`

const Wrapper = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 70px ${CONTENT_PADDING}px;

  // Add blur effect
  @media (min-width: ${MIN_WIDTH_FOR_PATTERN}px) {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) ${BLUR_RADIUS}px,
      rgba(255, 255, 255, 1) calc(100% - ${BLUR_RADIUS}px),
      rgba(255, 255, 255, 0) 100%
    );

    // Add additional padding to compensate for blur
    padding-left: calc(${CONTENT_PADDING}px + ${BLUR_RADIUS}px);
    padding-right: calc(${CONTENT_PADDING}px + ${BLUR_RADIUS}px);
  }

  article + article {
    margin-top: var(--spacing-L);
  }
`
