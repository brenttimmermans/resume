import styled from 'styled-components'
import { css } from '@emotion/react'

import { H1, TextLink } from '~/src/components/Common/Text'
import { Image, CircularImage } from '~/src/components/Common/Image'
import Socials from '~/src/components/Common/Socials'
import { InstagramLink } from '~/src/util/links'

import ProfilePicture from '~/src/assets/images/profile.jpeg'
import WaveEmoji from '~/src/assets/images/wave.png'

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
      <TextWrapper>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          `}
        >
          <H1>Hi! I'm Brent&nbsp;Timmermans</H1>
          <Image
            src={WaveEmoji}
            alt="Waving hand emoji"
            size={40}
            css={css`
              margin-left: var(--spacing-S);
            `}
          />
        </div>
        <p>
          Developer · <TextLink href={InstagramLink}>Photographer</TextLink> ·
          Runner
        </p>
        <Socials />
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  text-align: center;
`

const TextWrapper = styled.div`
  > * + * {
    margin-top: var(--spacing-L);
  }
`
