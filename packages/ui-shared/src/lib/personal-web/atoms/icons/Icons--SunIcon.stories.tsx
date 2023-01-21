import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SunIcon } from './Icons'

const Story: ComponentMeta<typeof SunIcon> = {
  component: SunIcon,
  title: 'SunIcon',
}
export default Story

const Template: ComponentStory<typeof SunIcon> = (args) => <SunIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
