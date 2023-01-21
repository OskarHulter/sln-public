import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hero } from './Hero'

const Story: ComponentMeta<typeof Hero> = {
  component: Hero,
  title: 'Hero',
}
export default Story

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {}
