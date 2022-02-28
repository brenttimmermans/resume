import { css } from '@emotion/react'
import styled from 'styled-components'

import { H2, H3, Subtle } from '~/src/components/Common/Text'
import { CircularImage } from '~/src/components/Common/Image'

import WaylayLogo from '~/src/assets/images/companies/waylay.jpg'
import SmallTownHeroesLogo from '~/src/assets/images/companies/smalltownheroes.jpg'
import OdiseeLogo from '~/src/assets/images/companies/odisee.png'

const ICON_SIZE = 40

export default function Experiences() {
  return (
    <Wrapper>
      <H2>Experiences</H2>
      <ExperienceItem
        title="Fullstack JavaScript Developer @ Waylay"
        period="September 2017 - Present"
        logo={
          <CircularImage
            src={WaylayLogo}
            alt="Waylay company logo"
            size={ICON_SIZE}
          />
        }
      />
      <ExperienceItem
        title="Intern Frontend Developer @ Small Town Heroes"
        period="February 2017 - May 2017"
        logo={
          <CircularImage
            src={SmallTownHeroesLogo}
            alt="Small Town Heroes company logo"
            size={ICON_SIZE}
          />
        }
      />
      <ExperienceItem
        title="Elektronica-ICT - Web &amp; Mobile development @ Odisee"
        period="2014 - 2017"
        logo={
          <CircularImage
            src={OdiseeLogo}
            alt="Odisee school logo"
            size={ICON_SIZE}
          />
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

interface IExperienceItemProps {
  title: string
  period: string
  logo: React.ReactNode
}

const ExperienceItem = ({ title, period, logo }: IExperienceItemProps) => (
  <ExperienceItemWrapper>
    <div
      css={css`
        margin-right: var(--spacing-S);
      `}
    >
      <H3>{title}</H3>
      <Subtle
        css={css`
          margin: 0;
        `}
      >
        {period}
      </Subtle>
    </div>
    {logo}
  </ExperienceItemWrapper>
)

const ExperienceItemWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
