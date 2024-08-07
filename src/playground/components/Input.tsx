import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'
import { ChangeEventHandler } from 'react'

const getSetter = (): [ChangeEventHandler<HTMLInputElement>, Promise<string>] => {
  let resolve: any
  const promise: Promise<string> = new Promise(r => {
    resolve = r
  })

  const callback: ChangeEventHandler<HTMLInputElement> = 
    e => { resolve(e.target.value) }

  return [callback, promise]
}

export const Input = async function *inner({ placeholder }: { placeholder: string }) {
  let value = ''
  while (value !== 'hello') {
    const [cb, promise] = getSetter()
    yield <input onChange={cb} value={value} placeholder={placeholder} />
    value = await promise
  }
  yield (
    <>
      <input value={value} /> ← there, you said it
    </>
  )
}
