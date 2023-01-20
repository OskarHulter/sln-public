import type { Content } from './content/index.js'
import content from './content/index.js'

type SlnDomain = {
  content: Content
}

export default function getDomain(): SlnDomain {
  return {
    content,
  }
}
