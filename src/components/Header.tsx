import { css } from '@emotion/react'
import styled from 'styled-components'

import ProfilePicture from '~/src/assets/images/profile.jpg'
import WaveEmoji from '~/src/assets/images/wave.png'
import { CircularImage, Image } from '~/src/components/Common/Image'
import Socials from '~/src/components/Common/Socials'
import { H1, TextLink } from '~/src/components/Common/Text'
import ThemeToggle from '~/src/components/Common/ThemeToggle'
import { InstagramLink } from '~/src/util/links'

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
          margin-bottom: var(--spacing-L);
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-L);
        `}
      >
        <H1>Hi! I&apos;m Brent</H1>
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
