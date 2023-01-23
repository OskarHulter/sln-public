import content from './content'
import { Content } from './types'

type Store = {
  content: Content
}

export default function getDomain(): Store {
  return {
    content,
  }
}
