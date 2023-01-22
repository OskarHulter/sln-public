import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Socials } from './Socials.js'

const Story: ComponentMeta<typeof Socials> = {
  component: Socials,
  title: 'Socials',
}
export default Story

const Template: ComponentStory<typeof Socials> = (args) => <Socials {...args} />

export const Primary = Template.bind({})
Primary.args = {}
