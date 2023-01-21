import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgReact } from './React'

const Story: ComponentMeta<typeof SvgReact> = {
  component: SvgReact,
  title: 'SvgReact',
}
export default Story

const Template: ComponentStory<typeof SvgReact> = (args) => <SvgReact {...args} />

export const Primary = Template.bind({})
Primary.args = {}
