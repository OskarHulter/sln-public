export interface DebounceReturn<F extends FunctionWithArguments>
  extends Array<DebouncedFunction<F> | (() => void)> {
  0: (...args: Parameters<F>) => Promise<ReturnType<F>>
  1: () => void
}

export interface DebouncedFunction<F extends FunctionWithArguments> {
  (...args: Parameters<F>): Promise<ReturnType<F>>
}

export interface FunctionWithArguments {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any[]): any
}

export default function debounce<F extends FunctionWithArguments>(
  fn: F,
  ms: number
): DebounceReturn<F> {
  let timer: ReturnType<typeof setTimeout>

  const debouncedFunc: DebouncedFunction<F> = (...args) =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        resolve(fn(...args))
      }, ms)
    })

  const teardown = () => {
    clearTimeout(timer)
  }

  return [debouncedFunc, teardown]
}
