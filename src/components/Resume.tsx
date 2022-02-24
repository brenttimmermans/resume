import styled from 'styled-components'

import Header from './Header'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Technologies from './Technologies'
import Languages from './Languages'
import Contact from './Contact'

import BgTexture from '../assets/images/texture.svg'

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
