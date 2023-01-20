type Output = unknown

export const exampleJsonParse = (value: string): Output => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    return JSON.parse(value) as Output
  } catch {
    return undefined
  }
}

exampleJsonParse('{}') // {}
exampleJsonParse('invalid') // undefined

// So instead of try catching everywhere, you can simply combine it with ?? like this:

export const example = exampleJsonParse('hej') ?? 'defaultExample'
