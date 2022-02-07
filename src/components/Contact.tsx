import { css } from '@emotion/react'

import Socials from './Common/Socials'
import { H2 } from './Common/Text'

export default function Contact() {
  return (
    <article>
      <H2>Contact</H2>
      <p>Want to chat or grab a coffee? Let's connect on LinkedIn!</p>
      <div css={css`text-align: center;'`}>
        <Socials />
      </div>
    </article>
  )
}
