import { NextApiRequest, NextApiResponse } from 'next/types'
import mail from '@sendgrid/mail'
import { getSendGridData, mailFormSchema, parseHandler } from '@sln/data-access-shared'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const parsed = await parseHandler(mailFormSchema, { req, res })


  const data = getSendGridData(parsed)
  try {
    await mail.send(data)
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }

  return res.status(200).json({ status: 'Ok', error: '' })
}
