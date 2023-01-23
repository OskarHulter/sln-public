import type { Story } from '@ladle/react'
import UserTwitterCard from './UserTwitterCard'

export const UserTwitterCardStory: Story<typeof UserTwitterCard> = (args) => (
  <UserTwitterCard {...args} />
)

UserTwitterCardStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
