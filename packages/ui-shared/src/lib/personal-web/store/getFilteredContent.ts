import { ContentKeys } from '@sln/content-shared'

export default function getFilteredContent(content, filter) {
  return content.filter((d: ContentKeys) => {
    if (filter === 'SHOW_ALL') {
      return true
    } else return d.name === filter.toLowerCase()
  })
}
