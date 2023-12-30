import { useState, useEffect } from 'react'

import type { ReactNode } from 'react'
import type { GeneratorComponent } from './types/GeneratorComponent.js'

export const gen = <P extends {}>(genComponent: GeneratorComponent<P>) =>
  (props: P) => {
  const [elements, setElements] = useState<ReactNode>(null)

  useEffect(() => {
    const worker = async () => {
      for await (const elements of genComponent(props)) {
        setElements(elements)
      }
    }
    worker()
  }, [setElements, props])

  return elements
}
