import type { Story } from '@ladle/react'
import { Layout } from './Layout.js'

export const LayoutStory: Story<typeof Layout> = (args) => <Layout {...args}>hej</Layout>

LayoutStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
