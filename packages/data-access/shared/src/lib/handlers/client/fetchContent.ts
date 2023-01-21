import { content } from '@sln/content-shared'
import { invariant } from 'ts-invariant'

export type Content = typeof content

const mockFetch = async () => content.get()

const fetchContent = async (): Promise<Content> => {
  const res = await mockFetch()
  invariant(res, 'Expected value to be content')
  return res
}

export default fetchContent
