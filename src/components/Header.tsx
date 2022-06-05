import styled from 'styled-components'
import { css } from '@emotion/react'

import { H1, TextLink } from '~/src/components/Common/Text'
import { Image, CircularImage } from '~/src/components/Common/Image'
import Socials from '~/src/components/Common/Socials'
import { InstagramLink } from '~/src/util/links'
import ThemeToggle from '~/src/components/Common/ThemeToggle'

import ProfilePicture from '~/src/assets/images/profile.jpg'
import WaveEmoji from '~/src/assets/images/wave.png'

export default function Header() {
  return (
    <Wrapper>
      <ThemeToggleWrapper>
        <ThemeToggle />
      </ThemeToggleWrapper>
      <CircularImage
        src={ProfilePicture}
        alt="Profile picture of Brent"
        size={200}
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
          <H1>Hi! I&apos;m Brent&nbsp;Timmermans</H1>
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
  position: relative;
  text-align: center;
`

const ThemeToggleWrapper = styled.section`
  position: absolute;
  top: -30px;
  right: -10px;
  width: 30px;
  height: auto;
`

const TextWrapper = styled.div`
  > * + * {
    margin-top: var(--spacing-L);
  }
`
