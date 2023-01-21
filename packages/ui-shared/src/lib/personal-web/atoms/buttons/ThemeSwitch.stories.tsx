import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeSwitch } from './ThemeSwitch'

const Story: ComponentMeta<typeof ThemeSwitch> = {
  component: ThemeSwitch,
  title: 'ThemeSwitch',
}
export default Story

const Template: ComponentStory<typeof ThemeSwitch> = (args) => <ThemeSwitch {...args} />

export const Primary = Template.bind({})
Primary.args = {}
