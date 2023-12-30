import type { FunctionComponent, ReactNode } from 'react'

export type GeneratorComponent<P> = FunctionComponent extends (...parameters: infer P) =>
  any ? (...parameters: P) => AsyncGenerator<ReactNode> : never
