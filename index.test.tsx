import { render, screen } from '@testing-library/react'
import { describe, it } from 'mocha'
import { use, expect } from 'chai'
import chaiDom from 'chai-dom'

use(chaiDom)

describe('hello', () => {
  it('works', () => {
    const MyComponent = () => <h1>hello</h1>

    render(<MyComponent />)
  
    expect(screen.queryByRole('heading')).to.exist
  })
})
