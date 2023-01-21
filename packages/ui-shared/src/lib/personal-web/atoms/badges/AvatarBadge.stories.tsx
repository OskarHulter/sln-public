import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarBadge } from './AvatarBadge'

const Story: ComponentMeta<typeof AvatarBadge> = {
  component: AvatarBadge,
  title: 'AvatarBadge',
}
export default Story

const Template: ComponentStory<typeof AvatarBadge> = (args) => <AvatarBadge {...args} />

export const Primary = Template.bind({})
Primary.args = {}
