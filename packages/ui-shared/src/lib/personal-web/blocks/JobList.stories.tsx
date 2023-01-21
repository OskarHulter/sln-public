import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { JobList } from './JobList.js'

const Story: ComponentMeta<typeof JobList> = {
  component: JobList,
  title: 'JobList',
}
export default Story

const Template: ComponentStory<typeof JobList> = (args) => <JobList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
