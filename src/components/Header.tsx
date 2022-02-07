import styled from 'styled-components'
import { css } from '@emotion/react'

import { H1, TextLink } from './Common/Text'
import CircularImage from './Common/Image'
import Socials from './Common/Socials'
import { InstagramLink } from '../links'

import ProfilePicture from '../assets/images/profile.jpeg'

export default function Header() {
  return (
    <Wrapper>
      <CircularImage
        src={ProfilePicture}
        alt="Profile picture of Brent"
        size={140}
        css={css`
          margin-bottom: 70px;
        `}
      />
      <div
        css={css`
          > * + * {
            margin-top: var(--spacing-L);
          }
        `}
      >
        <H1>Brent Timmermans</H1>
        <p>
          Developer · <TextLink href={InstagramLink}>Photographer</TextLink> ·
          Runner
        </p>
        <Socials />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  text-align: center;
`
