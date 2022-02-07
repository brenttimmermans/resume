import styled from 'styled-components'

import Header from './Header'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Technologies from './Technologies'
import Languages from './Languages'
import Contact from './Contact'

export default function Resume() {
  return (
    <Wrapper>
      <Header />
      <AboutMe />
      <Experiences />
      <Technologies />
      <Languages />
      <Contact />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  article + article {
    margin-top: var(--spacing-L);
  }

  padding: 70px 25px;
`
