import type { Story } from '@ladle/react'
import Hero from './Hero'

export const HeroStory: Story<typeof Hero> = (args) => <Hero {...args} />

HeroStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
