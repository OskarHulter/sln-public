import * as createHttpError from 'http-errors'
import { NextApiResponse } from 'next'
import { ZodError } from 'zod'

// Shape of the response when an error is thrown
export interface ErrorResponse {
  error: {
    message: string
    err?: unknown // Sent for unhandled errors reulting in 500
  }
  status?: number // Sent for unhandled errors reulting in 500
}

export function errorHandler(err: unknown, res: NextApiResponse<ErrorResponse>) {
  // Errors with statusCode >= 500 are should not be exposed
  if (createHttpError.isHttpError(err) && err.expose) {
    // Handle all errors thrown by http-errors module
    return res.status(err.statusCode).json({ error: { message: err.message } })
  } else if (err instanceof ZodError) {
    // Handle zod validation errors
    return res.status(400).json({ error: { message: err.errors.join(', ') } })
  } else {
    // default to 500 server error
    console.error(err)
    return res.status(500).json({
      error: { message: 'Internal Server Error', err: err },
      status: createHttpError.isHttpError(err) ? err.statusCode : 500,
    })
  }
}
