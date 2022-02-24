import styled from 'styled-components'
import { css } from '@emotion/react'

import { H2, H3, Subtle } from '~/src/components/Common/Text'
import { CircularImage } from '~/src/components/Common/Image'

import DutchFlagIcon from '~/src/assets/images/flags/dutch.png'
import EnglishFlagIcon from '~/src/assets/images/flags/english.png'
import FrenchFlagIcon from '~/src/assets/images/flags/french.png'

export default function Languages() {
  return (
    <Wrapper>
      <H2>Languages</H2>
      <LanguageItem
        language="Dutch"
        level="C2 · Native tongue"
        icon={
          <CircularImage src={DutchFlagIcon} alt="Dutch flag icon" size={30} />
        }
      />
      <LanguageItem
        language="English"
        level="C1 · Advanced level"
        icon={
          <CircularImage
            src={EnglishFlagIcon}
            alt="English flag icon"
            size={30}
          />
        }
      />
      <LanguageItem
        language="French"
        level="B1 · Intermediate level"
        icon={
          <CircularImage
            src={FrenchFlagIcon}
            alt="French flag icon"
            size={30}
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

const LanguageItem = ({ icon, language, level }) => (
  <section
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    {icon}
    <div
      css={css`
        margin-left: var(--spacing-M);
      `}
    >
      <H3
        css={css`
          margin: 0;
        `}
      >
        {language}
      </H3>
      <Subtle
        css={css`
          margin: 0;
        `}
      >
        {level}
      </Subtle>
    </div>
  </section>
)
