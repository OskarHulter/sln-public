import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { UserBadge } from './UserBadge.js'

const Story: ComponentMeta<typeof UserBadge> = {
  component: UserBadge,
  title: 'UserBadge',
}
export default Story

const Template: ComponentStory<typeof UserBadge> = (args) => <UserBadge {...args} />

export const Primary = Template.bind({})
Primary.args = {}
