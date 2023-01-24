import type { ContentBlock, ContentId } from '@sln/domain-shared'
import { contentList } from '@sln/domain-shared'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const fetchContent = async (slug: ContentId): Promise<ContentBlock> => {
  const { data } = await axios.get(`content/${slug}`)
  return data
}
function getContentList(name: string): ContentBlock {
  const data = contentList.find((d: ContentBlock) => d.name === name)
  return data || contentList[0]
}
export default function useContentQuery(name: string) {
  return useQuery<ContentBlock>({
    queryKey: ['content', name],
    queryFn: () => fetchContent(name),
    initialData: () => getContentList(name),
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })
}
