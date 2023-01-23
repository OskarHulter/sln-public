import { mailFormSchema, mailOptionsSchema, sendExternal, sendInternal } from '@sln/features-mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import errorHandler from '../shared/errorHandler'
import parseHandler from '../shared/parseHandler'

export default async function sendHandler(req: NextApiRequest, res: NextApiResponse) {
  const parsedInternal = await parseHandler(mailFormSchema, { req, res })
  if (parsedInternal) {
    try {
      sendInternal(parsedInternal)
      return res.status(200).json({ status: 'Ok', error: '' })
    } catch (error) {
      errorHandler(error, res)
    }
  } else {
    const parsedExternal = await parseHandler(mailOptionsSchema, { req, res })
    try {
      sendExternal(parsedExternal)
      return res.status(200).json({ status: 'Ok', error: '' })
    } catch (error) {
      errorHandler(error, res)
    }
  }
}
