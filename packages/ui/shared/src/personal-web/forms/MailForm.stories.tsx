import type { Story } from '@ladle/react'
import MailForm from './MailForm'

export const MailFormStory: Story<typeof MailForm> = (args) => <MailForm {...args} />

MailFormStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
