import type { Story } from '@ladle/react'
import AvatarBadge from './AvatarBadge'

export const AvatarBadgeStory: Story = () => <AvatarBadge />

AvatarBadgeStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
