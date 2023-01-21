import {
  mailFormSchema,
  mailOptionsSchema,
  Sender,
  sendExternal,
  sendInternal,
} from '@sln/features-mail'
import { NextApiRequest, NextApiResponse } from 'next'
import errorHandler from '../shared/errorHandler.js'
import parseHandler from '../shared/parseHandler.js'

export default async function mailHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  sender: Sender
) {
  const parsedInternal = await parseHandler(mailFormSchema, { req, res })
  console.log(sender)
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
