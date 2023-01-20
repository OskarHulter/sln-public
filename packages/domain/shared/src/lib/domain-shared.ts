import type { Content } from './content/index.js'
import { content } from './content/index.js'

type Store = {
  content: Content
}

export function getDomain(): Store {
  return {
    content,
  }
}
