import type { Story } from '@ladle/react'
import Navigation from './Navigation'

export const NavigationStory: Story<typeof Navigation> = (args) => <Navigation {...args} />

NavigationStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
