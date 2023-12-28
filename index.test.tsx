import { render, screen } from '@testing-library/react'
import * as mocha from 'mocha'
import { expect } from 'chai'

console.log('loaded')
mocha.describe('hello', () => {
  mocha.it('works', () => {
    const MyComponent = () => <h1>hello</h1>

    render(<MyComponent />)
  
    console.log('poke')
    // @ts-expect-error nada
    expect(screen.queryByRole('heading')).to.exist()
  })
})
