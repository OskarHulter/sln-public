import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgNextjs } from './Nextjs'

const Story: ComponentMeta<typeof SvgNextjs> = {
  component: SvgNextjs,
  title: 'SvgNextjs',
}
export default Story

const Template: ComponentStory<typeof SvgNextjs> = (args) => <SvgNextjs {...args} />

export const Primary = Template.bind({})
Primary.args = {}
