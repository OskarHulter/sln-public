import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwitterIcon } from './Icons'

const Story: ComponentMeta<typeof TwitterIcon> = {
  component: TwitterIcon,
  title: 'TwitterIcon',
}
export default Story

const Template: ComponentStory<typeof TwitterIcon> = (args) => <TwitterIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
