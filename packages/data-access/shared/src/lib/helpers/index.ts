import { MailFormSchema } from '../schemas'

export const getMailMessage = (data: MailFormSchema) => `
    name:${data.name}\r\n
    mail:${data.mail}\r\n
    message:${data.message}
  `

export const getSendGridData = (data: MailFormSchema) => ({
  to: 'oskarhulter@gmail.com',
  from: 'hello@sendgridDomain.com',
  subject: `Contact form submission from ${data.name}`,
  text: getMailMessage(data),
  html: getMailMessage(data).replace(/\r\n/g, '<br>'),
})
