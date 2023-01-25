import type { Story } from '@ladle/react'
import PageHeader from './PageHeader'

export const PageHeaderStory: Story<typeof PageHeader> = (args) => (
  <PageHeader {...args}>{args.children}</PageHeader>
)

PageHeaderStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
