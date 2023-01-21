import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { GithubIcon } from './Icons'

const Story: ComponentMeta<typeof GithubIcon> = {
  component: GithubIcon,
  title: 'GithubIcon',
}
export default Story

const Template: ComponentStory<typeof GithubIcon> = (args) => <GithubIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
