import type { Story } from '@ladle/react'
import { Footer } from './Footer.js'

export const FooterStory: Story<typeof Footer> = (args) => <Footer {...args} />

FooterStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
