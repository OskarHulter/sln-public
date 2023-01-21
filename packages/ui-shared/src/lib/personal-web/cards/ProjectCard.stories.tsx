import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProjectCard } from './ProjectCard'

const Story: ComponentMeta<typeof ProjectCard> = {
  component: ProjectCard,
  title: 'ProjectCard',
}
export default Story

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
