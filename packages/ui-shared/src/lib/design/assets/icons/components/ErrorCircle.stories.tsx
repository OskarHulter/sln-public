import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgErrorCircle } from './ErrorCircle'

const Story: ComponentMeta<typeof SvgErrorCircle> = {
  component: SvgErrorCircle,
  title: 'SvgErrorCircle',
}
export default Story

const Template: ComponentStory<typeof SvgErrorCircle> = (args) => <SvgErrorCircle {...args} />

export const Primary = Template.bind({})
Primary.args = {}
