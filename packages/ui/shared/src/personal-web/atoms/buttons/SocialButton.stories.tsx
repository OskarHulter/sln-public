import type { Story } from '@ladle/react'
import { SocialButton, SocialProps } from './SocialButton'

export const SocialButtonStory: Story<SocialProps> = (args) => <SocialButton {...args} />

SocialButtonStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

SocialButtonStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
