import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgPrisma } from './Prisma'

const Story: ComponentMeta<typeof SvgPrisma> = {
  component: SvgPrisma,
  title: 'SvgPrisma',
}
export default Story

const Template: ComponentStory<typeof SvgPrisma> = (args) => <SvgPrisma {...args} />

export const Primary = Template.bind({})
Primary.args = {}
