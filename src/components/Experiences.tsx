import { css } from '@emotion/react'
import styled from 'styled-components'

import CheqroomLogo from '~/src/assets/images/companies/cheqroom.png'
import OdiseeLogo from '~/src/assets/images/companies/odisee.png'
import SmallTownHeroesLogo from '~/src/assets/images/companies/smalltownheroes.png'
import WaylayLogo from '~/src/assets/images/companies/waylay.png'
import { CircularImage } from '~/src/components/Common/Image'
import { H2, H3, Subtle } from '~/src/components/Common/Text'
import { Theme, useTheme } from '../hooks/useTheme'

const ICON_SIZE = 40

export default function Experiences() {
  const { theme } = useTheme()
  return (
    <Wrapper>
      <H2>Experiences</H2>
      <ExperienceItem
        title="Fullstack JavaScript Developer @ Cheqroom"
        period="May 2022 - Present"
        logo={
          <CustomIcon
            src={CheqroomLogo}
            alt="Cheqroom company logo"
            size={ICON_SIZE}
            theme={theme}
          />
        }
      />
      <ExperienceItem
        title="Fullstack JavaScript Developer @ Waylay"
        period="September 2017 - May 2022"
        logo={
          <CustomIcon
            src={WaylayLogo}
            alt="Waylay company logo"
            size={ICON_SIZE}
            theme={theme}
          />
        }
      />
      <ExperienceItem
        title="Intern Frontend Developer @ Small Town Heroes"
        period="February 2017 - May 2017"
        logo={
          <CustomIcon
            src={SmallTownHeroesLogo}
            alt="Small Town Heroes company logo"
            size={ICON_SIZE}
            theme={theme}
          />
        }
      />
      <ExperienceItem
        title="Elektronica-ICT - Web &amp; Mobile development @ Odisee"
        period="2014 - 2017"
        logo={
          <CustomIcon
            src={OdiseeLogo}
            alt="Odisee school logo"
            size={ICON_SIZE}
            theme={theme}
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

const CustomIcon = styled(CircularImage)`
  background-color: var(--color-white);
  padding: 6px;
  border: 1px solid hsl(0, 0%, 95%);

  ${props => {
    const color = props.theme === Theme.Dark ? 180 : 0
    return `
      box-shadow:
        2.7px 2.7px 2.7px rgba(${color}, ${color}, ${color}, 1%),
        6.9px 6.9px 6.9px rgba(${color}, ${color}, ${color}, 2%),
        14.2px 14.2px 14.2px rgba(${color}, ${color}, ${color}, 2%),
        29.2px 29.2px 29.2px rgba(${color}, ${color}, ${color}, 3%),
        80px 80px 80px rgba(${color}, ${color}, ${color}, 5%);
    `
  }}
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
