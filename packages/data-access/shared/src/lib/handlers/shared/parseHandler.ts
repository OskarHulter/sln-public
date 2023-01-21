/* eslint-disable functional/no-try-statement */
import { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'superjson'
import { z, ZodSchema } from 'zod'
import errorHandler from './errorHandler.js'

export type NextApiConfig = {
  req: NextApiRequest
  res: NextApiResponse
}

export default async function parseHandler(
  schema: ZodSchema,
  { req, res }: NextApiConfig
): Promise<NextApiResponse | z.infer<typeof schema>> {
  const body = parse(req.body)
  try {
    const result = await schema.parseAsync(body)
    return result.data
  } catch (error) {
    errorHandler(error, res)
  }
}
