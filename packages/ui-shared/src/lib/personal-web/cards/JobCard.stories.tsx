import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { JobCard } from './JobCard.js'

const Story: ComponentMeta<typeof JobCard> = {
  component: JobCard,
  title: 'JobCard',
}
export default Story

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
