import { Timer } from './Timer.js'
import { Input } from './Input.js'
import { StreamBasedInput } from './StreamBasedInput.js'

export const Playground = () => (
  <>
    <h1>This should work</h1>
    <details>
      <summary>A timer</summary>
      <Timer />
    </details>
    <details>
      <summary>An input</summary>
      <Input />
    </details>
    <details>
      <summary>A stream based input</summary>
      <StreamBasedInput />
    </details>
  </>
)
