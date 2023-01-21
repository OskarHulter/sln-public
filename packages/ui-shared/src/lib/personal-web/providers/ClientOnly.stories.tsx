import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { ClientOnly } from './ClientOnly'

const Story: ComponentMeta<typeof ClientOnly> = {
  component: ClientOnly,
  title: 'ClientOnly',
}
export default Story

const Template: ComponentStory<typeof ClientOnly> = (args) => <ClientOnly {...args} />

export const Primary = Template.bind({})
Primary.args = {}
