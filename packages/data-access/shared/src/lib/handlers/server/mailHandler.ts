import mail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next/types'
import mailFormSchema, { MailFormSchema } from '../../schemas/mailForm.js'
import errorHandler from '../shared/errorHandler.js'
import parseHandler from '../shared/parseHandler.js'

export interface FormElements extends HTMLFormControlsCollection {
  emailInput: HTMLInputElement
  messageInput: HTMLInputElement
  termsInput: HTMLInputElement
}

export interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default async function mailHandler(req: NextApiRequest, res: NextApiResponse) {
  const parsed = await parseHandler(mailFormSchema, { req, res })

  const data = getSendGridData(parsed)
  // eslint-disable-next-line functional/no-try-statement
  try {
    await mail.send(data)
  } catch (error) {
    errorHandler(error, res)
  }

  return res.status(200).json({ status: 'Ok', error: '' })
}

const getMailMessage = (data: MailFormSchema) => `
    name:${data.name}\r\n
    mail:${data.mail}\r\n
    message:${data.message}
  `

const getSendGridData = (data: MailFormSchema) => ({
  to: 'oskarhulter@gmail.com',
  from: 'hello@sendgridDomain.com',
  subject: `Contact form submission from ${data.name}`,
  text: getMailMessage(data),
  html: getMailMessage(data).replace(/\r\n/g, '<br>'),
})
