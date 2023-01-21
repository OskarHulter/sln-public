import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgTypescript } from './Typescript'

const Story: ComponentMeta<typeof SvgTypescript> = {
  component: SvgTypescript,
  title: 'SvgTypescript',
}
export default Story

const Template: ComponentStory<typeof SvgTypescript> = (args) => <SvgTypescript {...args} />

export const Primary = Template.bind({})
Primary.args = {}
