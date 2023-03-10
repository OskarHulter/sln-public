import { z } from 'zod'

const mailFormSchema = z.object({
  name: z.string().min(2).describe('Name // Please enter your name'),
  mail: z.string().email().min(2).describe('Mail // Please enter your mail'),
  message: z.string().min(5).describe('Please enter a message'),
  // emailUpdates: z.boolean().optional().describe('do you want to receive updates?'),
})

export interface FormElements extends HTMLFormControlsCollection {
  emailInput: HTMLInputElement
  messageInput: HTMLInputElement
  termsInput: HTMLInputElement
}

export interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default mailFormSchema
