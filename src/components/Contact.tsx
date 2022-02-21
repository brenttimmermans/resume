import { css } from '@emotion/react'

import Socials from './Common/Socials'
import { H2, TextLink } from './Common/Text'
import { LinkedinLink } from '../links'

export default function Contact() {
  return (
    <article>
      <H2>Contact</H2>
      <p>
        Want to chat or grab a coffee? Let's connect on{' '}
        <TextLink href={LinkedinLink}>LinkedIn</TextLink>!
      </p>
      <div css={css`text-align: center;'`}>
        <Socials />
      </div>
    </article>
  )
}
