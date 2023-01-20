import ky from 'ky'
import SuperJSON from 'superjson'
import { z } from 'zod'
import mailFormSchema from '../../schemas/mailForm.js'

const mailEndpoint = '/api/mail'

export default async function mailSubmitHandler(data: z.infer<typeof mailFormSchema>) {
  const json = SuperJSON.stringify(data)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await ky.post(mailEndpoint, { json }).json()

  return result
}
