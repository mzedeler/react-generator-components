import { render, screen } from '@testing-library/react'
import * as mocha from 'mocha'
import { use, expect } from 'chai'
import chaiDom from 'chai-dom'

use(chaiDom)

console.log('loaded')
mocha.describe('hello', () => {
  mocha.it('works', () => {
    const MyComponent = () => <h1>hello</h1>

    render(<MyComponent />)
  
    expect(screen.queryByRole('heading')).to.exist
  })
})
