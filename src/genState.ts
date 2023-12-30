export const genState = <T,>(initialValue: T): [AsyncGenerator<T>, (value: T) => void] => {
  let nextResolve: (value: T) => void
  const setValue = (value: T) => nextResolve(value)
  const iterator = (async function* gen() {
    yield initialValue
    while (true) {
      const promise = new Promise<T>(r => { nextResolve = r })
      yield await promise
    }
  })()

  return [iterator, setValue]
}
