import sendgrid from '@sendgrid/mail'
import type { z } from 'zod'
import Email from '../emails/notion-magic-link'
import mailOptionsSchema from '../schemas/mailOptions'
import type { MailOptionsSchema } from '../schemas/types'
import serializeMail from './serializeMail'

//sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const url = 'https://example.com' // ?

/**
 * * Send mail to external
 * @date 2023-01-21 - 18:20:31
 *
 * @param {z.infer<typeof mailOptionsSchema>} options
 */
export default function sendExternal(options: MailOptionsSchema) {
  const emailHtml = serializeMail(Email, url) //formatMailQuery(parsed) render(<Email url='https://example.com' />)

  const parsed = formatExternal(emailHtml, options)
  console.log('🚀 ~ file: sendMail.tsx:21 ~ sendMail ~ parsed', parsed)
  const optionsExample = {
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    html: emailHtml,
  }
  console.log('🚀 ~ file: sendMail.tsx:28 ~ sendMail ~ optionsExample', optionsExample)
  sendgrid.send(parsed)
}

/**
 * * Formats for sendgrid
 * @date 2023-01-21 - 18:20:31
 *
 * @param {string} mail
 * @param {z.infer<typeof mailOptionsSchema>} options
 * @returns {{ to: any; from: any; subject: any; html: string; }}
 */
const formatExternal = (mail: string, options: z.infer<typeof mailOptionsSchema>) => ({
  to: options.to,
  from: options.from,
  subject: options.subject,
  html: mail,
})
