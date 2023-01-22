import type { Story } from '@ladle/react'
import UserBadge from './UserBadge.js'

export const UserBadgeStory: Story = () => <UserBadge />

UserBadgeStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
