import Resume from '~/src/components/Resume'
import { useTransition } from './hooks/useTransition'

export function App() {
  useTransition()

  return <Resume />
}
