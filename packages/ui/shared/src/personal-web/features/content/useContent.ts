import { fetchContent } from '@sln/data-access-shared'
import type { ContentList } from '@sln/domain-shared'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export default function useContent(): UseQueryResult<ContentList> {
  return useQuery({
    queryKey: ['contentList'],
    queryFn: () => fetchContent(),
  })
}
