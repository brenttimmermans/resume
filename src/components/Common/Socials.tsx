import styled from 'styled-components'

import { GithubLink, LinkedinLink, TwitterLink } from '../../util/links'

import GithubLogo from '../../assets/images/socials/github.png'
import LinkedinLogo from '../../assets/images/socials/linkedin.png'
import TwitterLogo from '../../assets/images/socials/twitter.png'

export default function Socials() {
  return (
    <Wrapper>
      <SocialIcon
        icon={GithubLogo}
        link={GithubLink}
        alt="Github social link"
      />
      <SocialIcon
        icon={LinkedinLogo}
        link={LinkedinLink}
        alt="Linkedin social link"
      />
      <SocialIcon
        icon={TwitterLogo}
        link={TwitterLink}
        alt="Twitter social link"
      />
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

const SocialIcon = ({ icon, link, alt }) => (
  <a href={link}>
    <StyledIcon src={icon} alt={alt} />
  </a>
)

const StyledIcon = styled.img`
  max-height: 30px;
  max-width: 30px;
`
