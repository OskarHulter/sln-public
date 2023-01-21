import { mailFormSchema } from '@sln/domain-shared'
import ky from 'ky'
import { stringify } from 'superjson'
import { z } from 'zod'

const mailEndpoint = '/api/mail'
// Get the response data from server as JSON.
// If server returns the name submitted, that means the form works.
export default async function mailSubmitHandler(data: z.infer<typeof mailFormSchema>) {
  const json = stringify(data)
  const parsed = mailFormSchema.parse(json)

  const result = await ky.post(mailEndpoint, { json: parsed }).json()

  return result
}
