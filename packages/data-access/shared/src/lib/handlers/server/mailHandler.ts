import mail from '@sendgrid/mail'
import { mailFormSchema } from '@sln/domain-shared'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { z } from 'zod'
import errorHandler from '../shared/errorHandler.js'
import parseHandler from '../shared/parseHandler.js'

export type MailFormSchema = z.infer<typeof mailFormSchema>

export default async function mailHandler(req: NextApiRequest, res: NextApiResponse) {
  const parsed = await parseHandler(mailFormSchema, { req, res })

  const data = formatMailQuery(parsed)
  // eslint-disable-next-line functional/no-try-statement
  try {
    await mail.send(data)
  } catch (error) {
    errorHandler(error, res)
  }

  return res.status(200).json({ status: 'Ok', error: '' })
}


const formatMailQuery = (data: z.infer<typeof mailFormSchema>) => ({
  to: 'oskarhulter@gmail.com',
  from: 'hello@sendgridDomain.com',
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
