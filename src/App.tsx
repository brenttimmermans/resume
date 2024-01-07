import Resume from '~/src/components/Resume'
import { useTransition } from './hooks/useTransition'
import './lib/vercel'

export function App() {
  useTransition()

  return <Resume />
}
