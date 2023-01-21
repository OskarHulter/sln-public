import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { UserTwitterCard } from './UserTwitterCard.js'

const Story: ComponentMeta<typeof UserTwitterCard> = {
  component: UserTwitterCard,
  title: 'UserTwitterCard',
}
export default Story

const Template: ComponentStory<typeof UserTwitterCard> = (args) => <UserTwitterCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
