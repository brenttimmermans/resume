import { css } from '@emotion/react'

import { Bold, H2 } from '~/src/components/Common/Text'

// organised, trustworthy, postive

export default function AboutMe() {
  return (
    <article>
      <H2>About me</H2>

      <p>
        I&apos;m a <Bold>organised</Bold>, <Bold>trustworthy</Bold> and{' '}
        <Bold>positive minded</Bold> Full-Stack Developer.
        <br />
        <Bold>Running</Bold> in and around <Bold>Gent</Bold> a couple times a
        week.
        <br />
        Often found with a <Bold>camera in hand</Bold> early in the morning or
        late at night in the city.
      </p>
      <p
        css={css`
          text-align: center;
          font-size: var(--font-size-L);
        `}
      >
        ~
      </p>
      <p>
        <Bold>Problem-solving team player</Bold> with a great{' '}
        <Bold>eye for detail</Bold>.
        <br />
        <Bold>Eager to learn</Bold> from <Bold>peers &amp; mentors</Bold>,
        keeping myself <Bold>up to date</Bold> with the latest advancements on
        the web.
      </p>
    </article>
  )
}
