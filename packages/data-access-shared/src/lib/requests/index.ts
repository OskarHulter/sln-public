import invariant from 'ts-invariant'
import { z } from 'zod'
import { getContent } from '@sln/content-shared'
import { mailFormSchema } from '../schemas'


export const mockFetch = async () => getContent()


export const fetchContent = async (
): Promise<ReturnType<typeof getContent>> => {
  const res = await mockFetch()
  invariant(res, 'Expected value to be a person')
  return res
}


export const postContact = async (data: z.infer<typeof mailFormSchema>) => {
  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/contact'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }
  const response = await fetch(endpoint, options)
  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  alert(`Is this your full name: ${result.data}`)
}


export const postMail = async (data: z.infer<typeof mailFormSchema>) => {
  const JSONdata = JSON.stringify(data)

  const endpoint = '/api/mail'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }
  const response = await fetch(endpoint, options)
  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  return result
}

