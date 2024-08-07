import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'
import { gen } from '../../gen.js'

const sleep = (delay: number) => new Promise(r => setTimeout(r, delay))

export const Timer = gen(async function *inner(props) {
  let ticks = 0
  while (true) {
    await sleep(1000)
    yield <h1>{ticks++} seconds passed by</h1>
  }
})
