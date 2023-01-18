import { fetchContent } from '@sln/data-access-shared'
import { useQuery } from '@tanstack/react-query'


const useContent = () => {

  return useQuery({
    queryKey: ['initialContent'],
    queryFn: () => fetchContent(),
  })
}


export { useContent }
