import { css } from '@emotion/react'

import Socials from '~/src/components/Common/Socials'
import { H2, TextLink } from '~/src/components/Common/Text'
import { LinkedinLink } from '~/src/util/links'

export default function Contact() {
  return (
    <article>
      <H2>Contact</H2>
      <p>
        Want to chat or grab a coffee? Let&apos;s connect on{' '}
        <TextLink href={LinkedinLink}>LinkedIn</TextLink>!
      </p>
      <div css={css`text-align: center;'`}>
        <Socials />
      </div>
    </article>
  )
}
