import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgNode } from './Node'

const Story: ComponentMeta<typeof SvgNode> = {
  component: SvgNode,
  title: 'SvgNode',
}
export default Story

const Template: ComponentStory<typeof SvgNode> = (args) => <SvgNode {...args} />

export const Primary = Template.bind({})
Primary.args = {}
