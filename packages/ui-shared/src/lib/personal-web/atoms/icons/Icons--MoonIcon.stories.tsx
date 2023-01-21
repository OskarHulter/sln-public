import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoonIcon } from './Icons'

const Story: ComponentMeta<typeof MoonIcon> = {
  component: MoonIcon,
  title: 'MoonIcon',
}
export default Story

const Template: ComponentStory<typeof MoonIcon> = (args) => <MoonIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
