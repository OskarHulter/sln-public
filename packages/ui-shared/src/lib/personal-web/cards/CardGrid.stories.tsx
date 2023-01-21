import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardGrid } from './CardGrid.js'

const Story: ComponentMeta<typeof CardGrid> = {
  component: CardGrid,
  title: 'CardGrid',
}
export default Story

const Template: ComponentStory<typeof CardGrid> = (args) => <CardGrid {...args} />

export const Primary = Template.bind({})
Primary.args = {}
