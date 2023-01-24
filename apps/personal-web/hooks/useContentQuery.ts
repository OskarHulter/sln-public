import type { ContentBlock, ContentId, ContentList } from '@sln/domain-shared'
import { contentList } from '@sln/domain-shared'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const fetchContent = async (slug: ContentId): Promise<ContentBlock> => {
  const { data } = await axios.get(`content/${slug}`)
  return data
}
function getContentList(): ContentList {
  const data = contentList
  return data
}

export function useContentQuery(name: string) {
  return useQuery<ContentBlock>({
    queryKey: ['content', name],
    queryFn: () => fetchContent(name),
    initialData: () => {
      const data = getContentCache()
    },
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })
}
