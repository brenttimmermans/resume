export function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Button>test12</Button>
      <h1>Brent Timmermans</h1>
      <p>
        Developer - <a href="">Photographer</a> - Runner
      </p>
      <section>
        <span>
          <a href="">Linkedin</a>
        </span>
        <span>
          <a href="">Github</a>
        </span>
        <span>
          <a href="">Twitter</a>
        </span>
      </section>
      <h2>About me</h2>
      <h2>Experiences</h2>
      <h2>Technologies</h2>
      <h2>Languages</h2>
      <h2>Contact</h2>
    </div>
  )
}

interface User {
  name: string
}

import { css } from '@emotion/react'

function Button({ children }) {
  return (
    <button
      css={css`
        background: hotpink;
        &:hover {
          background: purple;
        }
      `}
    >
      {children}
    </button>
  )
}
