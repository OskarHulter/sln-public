/* eslint-disable functional/no-throw-statement */
/* eslint-disable functional/no-try-statement */
import type { Method } from 'axios'
import createHttpError from 'http-errors'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import errorHandler, { ErrorResponse } from './errorHandler.js'

type ApiMethodHandlers = {
  [key in Uppercase<Method>]?: NextApiHandler
}

export default function apiHandler(handler: ApiMethodHandlers) {
  return async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
    try {
      const method = req.method ? (req.method.toUpperCase() as keyof ApiMethodHandlers) : undefined

      // check if handler supports current HTTP method
      if (!method)
        throw new createHttpError.MethodNotAllowed(`No method specified on path ${req.url}!`)

      const methodHandler = handler[method]
      if (!methodHandler)
        throw new createHttpError.MethodNotAllowed(
          `Method ${req.method} Not Allowed on path ${req.url}!`
        )

      // call method handler
      await methodHandler(req, res)
    } catch (err) {
      // global error handler
      errorHandler(err, res)
    }
  }
}
