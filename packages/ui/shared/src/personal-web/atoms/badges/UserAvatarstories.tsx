import type { Story } from '@ladle/react'
import UserAvatar from './UserAvatar'

export const UserAvatarStory: Story = () => <UserAvatar />

UserAvatarStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
