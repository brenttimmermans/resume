import { css } from '@emotion/react'
import styled from 'styled-components'

import { H2, H3, Subtle } from './Common/Text'

import WaylayLogo from '../assets/images/companies/waylay.jpg'
import SmallTownHeroesLogo from '../assets/images/companies/smalltownheroes.jpg'
import OdiseeLogo from '../assets/images/companies/odisee.png'
import CircularImage from './Common/Image'

export default function Experiences() {
  return (
    <Wrapper>
      <H2>Experiences</H2>
      <ExperienceItem
        title="Fullstack JavaScript Engineer @ Waylay"
        period="September 2017 - Present"
        logo={
          <CircularImage src={WaylayLogo} alt="Waylay company logo" size={50} />
        }
      />
      <ExperienceItem
        title="Intern Frontend Developer @ Small"
        period="February 2017 - May 2017"
        logo={
          <CircularImage
            src={SmallTownHeroesLogo}
            alt="Small Town Heroes company logo"
            size={50}
          />
        }
      />
      <ExperienceItem
        title="Elektronice-ICT - Web &amp; Mobile development @ Odisee"
        period="2014 - 2017"
        logo={
          <CircularImage src={OdiseeLogo} alt="Odisee school logo" size={50} />
        }
      />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  section + section {
    margin-top: var(--spacing-M);
  }
`

const ExperienceItem = ({ title, period, logo }) => (
  <section
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
  >
    <div
      css={css`
        margin-right: var(--spacing-S);
      `}
    >
      <H3
        css={css`
          margin: 0;
        `}
      >
        {title}
      </H3>
      <Subtle
        css={css`
          margin: 0;
        `}
      >
        {period}
      </Subtle>
    </div>
    {logo}
  </section>
)
