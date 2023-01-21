import type { Story } from '@ladle/react'
import { Header } from './Header.js'

export const HeaderStory: Story<typeof Header> = (args) => <Header {...args} />

HeaderStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
