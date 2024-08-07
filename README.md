# react-generator-components
Generator based rendering for React components: write components as async generators and
use `yield` with JSX syntaxt to yield other components

A sample async generator component:
```typescript
import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'

const sleep = (delay: number) => new Promise(r => setTimeout(r, delay))

export const Timer = async function *inner() {
  let ticks = 0
  while (true) {
    await sleep(1000)
    yield <h1>{ticks++} seconds passed by</h1>
  }
}
```

How it is used:

```javascript
import React from 'react'
import { createGeneratorElement } from '../../createGeneratorElement.js'

export MyApp = () => (
  <>
    <h1>My really fancy app with a timer</h1>
    <Timer />
  </>
)
```

Note that this is just a proof of concept for how you can create CrankJS like components that
coexist with React. Please poke me if you want to use it for anything serious.

## Try the playground
```
npm i
npm run develop -- --open
```

## Feature requests, bugs and support
I am unable to provide free support or maintenance, but I will happily try to merge pull
requests that are taking this in a direction, I can support (if in doubt, ask first).

## Author
Michael Zedeler <michael@zedeler.dk>
