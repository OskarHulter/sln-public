import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Projects } from './Projects.js'

const Story: ComponentMeta<typeof Projects> = {
  component: Projects,
  title: 'Projects',
}
export default Story

const Template: ComponentStory<typeof Projects> = (args) => <Projects {...args} />

export const Primary = Template.bind({})
Primary.args = {}
