import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { AvatarBadge } from './AvatarBadge.js'

const Story: ComponentMeta<typeof AvatarBadge> = {
  component: AvatarBadge,
  title: 'AvatarBadge',
}
export default Story

const Template: ComponentStory<typeof AvatarBadge> = (args) => <AvatarBadge {...args} />

export const Primary = Template.bind({})
Primary.args = {}
