import { ChangeEventHandler } from 'react'
import { gen } from '../../gen.js'

const getSetter = (): [ChangeEventHandler<HTMLInputElement>, Promise<string>] => {
  let resolve: any
  const promise: Promise<string> = new Promise(r => {
    resolve = r
  })

  const callback: ChangeEventHandler<HTMLInputElement> = 
    e => { resolve(e.target.value) }

  return [callback, promise]
}

export const Input = gen(async function *inner(props) {
  let value = ''
  while (value !== 'hello') {
    const [cb, promise] = getSetter()
    yield <input onChange={cb} value={value} />
    value = await promise
  }
})
