import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProjectCard } from './ProjectCard.js'

const Story: ComponentMeta<typeof ProjectCard> = {
  component: ProjectCard,
  title: 'ProjectCard',
}
export default Story

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
