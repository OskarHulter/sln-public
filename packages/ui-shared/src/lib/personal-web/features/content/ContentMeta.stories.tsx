import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentMeta } from './ContentMeta'

const Story: ComponentMeta<typeof ContentMeta> = {
  component: ContentMeta,
  title: 'ContentMeta',
}
export default Story

const Template: ComponentStory<typeof ContentMeta> = (args) => <ContentMeta {...args} />

export const Primary = Template.bind({})
Primary.args = {}
