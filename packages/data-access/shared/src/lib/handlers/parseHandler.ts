import { NextApiRequest, NextApiResponse } from 'next/types'
import SuperJSON from 'superjson'
import { z, ZodSchema } from 'zod'
import { errorHandler } from './errorHandler'


export type NextApiConfig = {
  req: NextApiRequest
  res: NextApiResponse
}

export async function parseHandler(
  schema: ZodSchema,
  { req, res }: NextApiConfig,
): Promise<NextApiResponse | z.infer<typeof schema>> {
  const body = SuperJSON.parse(req.body)
  try {
    const result = await schema.parseAsync(body)
    return result.data
  } catch (error) {
    errorHandler(error, res)
  }
}
