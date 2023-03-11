import styled from 'styled-components'

import { GithubLink, LinkedinLink } from '~/src/util/links'

import GithubLogo from '~/src/assets/images/socials/github.svg'
import LinkedinLogo from '~/src/assets/images/socials/linkedin.svg'

export default function Socials() {
  return (
    <Wrapper>
      <StyledLink href={GithubLink}>
        <GithubLogo />
      </StyledLink>
      <StyledLink href={LinkedinLink}>
        <LinkedinLogo />
      </StyledLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  a + a {
    margin-left: var(--spacing-M);
  }
`

const StyledLink = styled.a`
  display: inline-flex;
  max-height: 30px;
  max-width: 30px;

  path {
    fill: var(--color-text);
  }
`
