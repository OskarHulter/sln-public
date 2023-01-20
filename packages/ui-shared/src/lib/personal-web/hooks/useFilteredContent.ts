import getFilteredCharacters from '../zustand/getFilteredCharacters'
import useStore from '../zustand/store'
import useContentStore from './useContentStore'

export default function useFilteredCharacters() {
  const { content = [], status } = useContentStore()
  const [setFilter, filter] = useStore('setCharacterFilter, characterFilter')

  const filteredContent = getFilteredCharacters(content, filter)

  return {
    status,
    filter,
    setFilter,
    filteredContent,
  }
}
