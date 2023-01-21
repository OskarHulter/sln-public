import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkedinIcon } from './Icons'

const Story: ComponentMeta<typeof LinkedinIcon> = {
  component: LinkedinIcon,
  title: 'LinkedinIcon',
}
export default Story

const Template: ComponentStory<typeof LinkedinIcon> = (args) => <LinkedinIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
