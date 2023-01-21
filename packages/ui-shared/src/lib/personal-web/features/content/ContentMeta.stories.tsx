import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ContentMeta } from './ContentMeta.js'

const Story: ComponentMeta<typeof ContentMeta> = {
  component: ContentMeta,
  title: 'ContentMeta',
}
export default Story

const Template: ComponentStory<typeof ContentMeta> = (args) => <ContentMeta {...args} />

export const Primary = Template.bind({})
Primary.args = {}
