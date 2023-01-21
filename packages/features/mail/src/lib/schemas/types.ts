import { z } from 'zod'
import mailFormSchema from './mailForm.js'
import mailOptionsSchema from './mailOptions.js'

export type MailFormSchema = z.infer<typeof mailFormSchema>
export type MailOptionsSchema = z.infer<typeof mailOptionsSchema>
export type Sender = (_: MailFormSchema | MailOptionsSchema) => void
