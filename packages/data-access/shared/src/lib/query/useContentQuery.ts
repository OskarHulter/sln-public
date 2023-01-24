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

export default function useContentQuery(name: string) {
  return useQuery<ContentBlock>({
    queryKey: ['content', name],
    queryFn: () => fetchContent(name),
    initialData: () => {
      const state = getContentList()
      // const state = queryClient.getQueryState<ContentList>(['content'])
      if (state) {
        // return the individual todo
        return state.find((d: ContentBlock) => d.name === name)
      }
      const data = getContentList().find((d: ContentBlock) => d.name === name)
      return data || contentList[0]
    },
    staleTime: Infinity,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  })
}
// initialData: () => {
//   const state = queryClient.getQueryState(['content', name])
//   if (state) {
//     // return the individual todo
//     return state.data.find((d: ContentBlock) => d.name === name)
//   }
// },
// initialData: () => {
//   const content = queryClient.getQueryData<Content>(['content', 'all'])
//   const filteredData =
//     content?.filter((content) => content.name === state) ?? []

//   return filteredData.length > 0 ? filteredData : undefined
// }
