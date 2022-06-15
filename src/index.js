import ReactDOM from 'react-dom'

import { App } from '~/src/App'

import '~/src/styles/fonts.css'
import '~/src/styles/main.css'
import '~/src/styles/normalize.css'

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
