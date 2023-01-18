import { z } from 'zod'


export const mailFormSchema = z.object({
  name: z.string().min(2).describe('Name // Please enter your name'),
  mail: z.string().email().min(2).describe('Mail // Please enter your mail'),
  message: z.string().min(10).describe('Message // Please enter a message'),
  terms: z.boolean().optional().describe('terms // Please agree to terms'),
})

export type MailFormSchema = z.infer<typeof mailFormSchema>


