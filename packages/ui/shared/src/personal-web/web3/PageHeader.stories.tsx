import type { Story } from '@ladle/react'
import { Text } from '@nextui-org/react'
import PageHeader from './PageHeader'

export const PageHeaderStory: Story<typeof PageHeader> = (args) => (
  <PageHeader {...args}>
    <Text> Oskar Hulter</Text>
  </PageHeader>
)

PageHeaderStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
