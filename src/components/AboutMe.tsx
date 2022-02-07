import { css } from '@emotion/react'

import { H2, Bold } from './Common/Text'

export default function AboutMe() {
  return (
    <article>
      <H2>About me</H2>
      <p>
        Motivated <Bold>web developer</Bold> with a passion for{' '}
        <Bold>frontend developement</Bold>, <Bold>UX</Bold> &amp;{' '}
        <Bold>design</Bold>.
        <br />
        <Bold>Running</Bold> in and around <Bold>Gent</Bold> a couple times a
        week.
        <br />
        Early in the morning at sunset or late at night in the city, you'll find
        outdoors with a <Bold>camera in hand</Bold>.
      </p>
      <p
        css={css`
          text-align: center;
        `}
      >
        ~
      </p>
      <p>
        <Bold>Problem-solving team player</Bold>. <Bold>Eager to learn</Bold> on
        a daily basis from <Bold>peers &amp; mentors</Bold>, keeping{' '}
        <Bold>up to date</Bold> with the latest advancements on the web.{' '}
        <Bold>Motivation/dedication</Bold>, <Bold>structure</Bold> and{' '}
        <Bold>efficiency</Bold> are my essential values in life.
      </p>
    </article>
  )
}