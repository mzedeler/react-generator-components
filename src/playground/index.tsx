import { createRoot } from 'react-dom/client'
import { Playground } from './components/Playground.js'
import { platform } from 'process'
import { createGeneratorElement } from '../createGeneratorElement.js'

const root = createRoot(document.getElementById('root'))
root.render(<Playground />)
