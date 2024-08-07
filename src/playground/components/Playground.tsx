import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'
import { Timer } from './Timer.js'
import { Input } from './Input.js'
import { StreamBasedInput } from './StreamBasedInput.js'

export const Playground = () => (
  <>
    <h1>This should work</h1>
    <details>
      <summary>A timer</summary>
      <Timer />
      <p>This is just a basic timer (note that it keeps running even when hidden).</p>
    </details>
    <details>
      <summary>An input</summary>
      <Input />
      <p>Try typing "hello". (There is no way to reset except by reloading.)</p>
    </details>
    <details>
      <summary>A stream based input</summary>
      <StreamBasedInput />
      <p>This input stays enabled until it contains "hello" like the other one, but
        it uses a stream internally (try looking at the source).</p>
    </details>
  </>
)
