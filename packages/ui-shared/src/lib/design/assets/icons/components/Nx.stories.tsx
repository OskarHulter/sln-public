import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgNx } from './Nx'

const Story: ComponentMeta<typeof SvgNx> = {
  component: SvgNx,
  title: 'SvgNx',
}
export default Story

const Template: ComponentStory<typeof SvgNx> = (args) => <SvgNx {...args} />

export const Primary = Template.bind({})
Primary.args = {}
