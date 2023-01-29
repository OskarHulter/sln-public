import type { Story } from '@ladle/react'
import type { ContentBlock } from '@sln/domain-shared'
import Block from './Block'

export const BlockStory: Story<ContentBlock> = (args) => <Block {...args} />

BlockStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
