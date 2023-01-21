import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { UiShared } from './UiShared.js'

const Story: ComponentMeta<typeof UiShared> = {
  component: UiShared,
  title: 'UiShared',
}
export default Story

const Template: ComponentStory<typeof UiShared> = (args) => <UiShared {...args} />

export const Primary = Template.bind({})
Primary.args = {}
