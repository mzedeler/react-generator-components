import { ChangeEventHandler } from 'react'
import { gen } from '../../gen.js'
import { genState } from '../../genState.js'

export const StreamBasedInput = gen(async function *inner(props) {
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
})
