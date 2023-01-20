import { content } from '@sln/content-shared'
import invariant from 'ts-invariant'

const mockFetch = async () => content.getContent()

const fetchContent = async (): Promise<ReturnType<typeof content.getContent>> => {
  const res = await mockFetch()
  invariant(res, 'Expected value to be a person')
  return res
}

export default fetchContent
