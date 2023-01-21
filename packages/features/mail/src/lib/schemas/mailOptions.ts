import { z } from 'zod'

const mailOptionsSchema = z.object({
  to: z.string().min(2),
  from: z.string().min(2),
  subject: z.string().min(2),
})

export default mailOptionsSchema
