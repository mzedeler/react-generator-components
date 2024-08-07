import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'
import { ChangeEventHandler } from 'react'
import { genState } from '../../genState.js'

export const StreamBasedInput = async function *inner() {
  let [value$, setValue] = genState('')

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    e => setValue(e.target.value)

  for await (const value of value$) {
    yield <input onChange={handleChange} value={value} />
    if (value === 'hello') {
      break
    }
  }

  yield <input value="hello" disabled />
}
