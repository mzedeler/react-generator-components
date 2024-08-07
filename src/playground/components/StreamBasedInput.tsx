import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'
import { ChangeEventHandler } from 'react'
import { gen } from '../../gen.js'
import { genState } from '../../genState.js'

export const StreamBasedInput = async function *inner() {
  let [value$, setValue] = genState('')

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    e => setValue(e.target.value)

  for await (const value of value$) {
    console.log({ value })
    yield <input  value={value} />
    if (value === 'hello') {
      break
    }
  }

  yield <input value="hello" disabled />
}
