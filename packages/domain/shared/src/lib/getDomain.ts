import content from './content.js'
import { Content } from './types.js'

type Store = {
  content: Content
}

export default function getDomain(): Store {
  return {
    content,
  }
}
