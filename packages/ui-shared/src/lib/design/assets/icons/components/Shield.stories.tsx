import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgShield } from './Shield'

const Story: ComponentMeta<typeof SvgShield> = {
  component: SvgShield,
  title: 'SvgShield',
}
export default Story

const Template: ComponentStory<typeof SvgShield> = (args) => <SvgShield {...args} />

export const Primary = Template.bind({})
Primary.args = {}
