import type { ContentList } from '@sln/domain-shared'
import { contentList } from '@sln/domain-shared'
import { invariant } from 'ts-invariant'

const getContent = (): ContentList => contentList

export default async function fetchContent(): Promise<ContentList> {
  const res = await getContent()
  invariant(res, 'Expected value to be content')
  return res
}
