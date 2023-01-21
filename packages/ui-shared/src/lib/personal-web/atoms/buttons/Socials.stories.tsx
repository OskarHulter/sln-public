import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Socials } from './Socials'

const Story: ComponentMeta<typeof Socials> = {
  component: Socials,
  title: 'Socials',
}
export default Story

const Template: ComponentStory<typeof Socials> = (args) => <Socials {...args} />

export const Primary = Template.bind({})
Primary.args = {}
