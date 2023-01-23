import { fetchContent } from '@sln/data-access-shared'
import { Content } from '@sln/domain-shared'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

export default function useContent(): UseQueryResult<Content> {
  return useQuery({
    queryKey: ['initialContent'],
    queryFn: fetchContent,
  })
}
