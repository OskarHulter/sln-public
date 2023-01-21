import sendgrid from '@sendgrid/mail'
import { MailFormSchema } from '../schemas/types.js'

const myMailAddress = 'oskarhulter@gmail.com'
const sendgridMailAddress = 'hello@sendgridDomain.com'
/**
 * * Send mail to myself
 * @date 2023-01-21 - 18:20:31
 *
 * @param {z.infer<typeof mailFormSchema>} data
 */
export default function sendInternal(data: MailFormSchema) {
  const parsed = formatInternal(data)
  sendgrid.send(parsed)
}

/**
 * ? look into changing this to use react mail
 * @date 2023-01-21 - 18:20:31
 *
 * @param {z.infer<typeof mailFormSchema>} data
 * @returns {{ to: string; from: string; subject: string; text: string; html: any; }}
 */
const formatInternal = (data: MailFormSchema) => ({
  to: myMailAddress,
  from: sendgridMailAddress,
  subject: `Contact form submission from ${data.name}`,
  text: `
    name:${data.name}\r\n
    mail:${data.mail}\r\n
    message:${data.message}
  `,
  html: `
    name:${data.name}\r\n
    mail:${data.mail}\r\n
    message:${data.message}
  `.replace(/\r\n/g, '<br>'),
})
