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
        language={Language.Dutch}
        level={CEFR_Level.C2}
        icon={
          <CircularImage src={DutchFlagIcon} alt="Dutch flag icon" size={30} />
        }
      />
      <LanguageItem
        language={Language.English}
        level={CEFR_Level.C1}
        icon={
          <CircularImage
            src={EnglishFlagIcon}
            alt="English flag icon"
            size={30}
          />
        }
      />
      <LanguageItem
        language={Language.French}
        level={CEFR_Level.B1}
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

enum Language {
  Dutch = 'Dutch',
  French = 'French',
  English = 'English',
}

enum CEFR_Level {
  C2 = 'C2 · Native tongue',
  C1 = 'C1 · Advanced level',
  B1 = 'B1 · Intermediate level',
}

interface ILanguageItemProps {
  language: Language
  level: CEFR_Level
  icon: React.ReactNode
}

const LanguageItem = ({ language, level, icon }: ILanguageItemProps) => (
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
