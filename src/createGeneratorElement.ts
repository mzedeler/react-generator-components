import React from 'react'
import { gen } from './gen.js'

const isAsyncGenerator = (value: any) => typeof value === 'function'
  && value.prototype?.toString() === '[object AsyncGenerator]'

export const createGeneratorElement = (element: any, props: any, ...rest: any[]) =>
  isAsyncGenerator(element)
  ? console.log(element) || React.createElement(gen(element), props)
  : React.createElement(element, props, ...rest)
