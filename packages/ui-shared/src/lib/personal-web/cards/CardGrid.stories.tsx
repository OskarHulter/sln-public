import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardGrid } from './CardGrid'

const Story: ComponentMeta<typeof CardGrid> = {
  component: CardGrid,
  title: 'CardGrid',
}
export default Story

const Template: ComponentStory<typeof CardGrid> = (args) => <CardGrid {...args} />

export const Primary = Template.bind({})
Primary.args = {}
