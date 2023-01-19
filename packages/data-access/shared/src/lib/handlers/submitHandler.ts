export interface FormElements extends HTMLFormControlsCollection {
  emailInput: HTMLInputElement
  messageInput: HTMLInputElement
  termsInput: HTMLInputElement
}

export interface ContactFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export const handleEmailSubmit = async (event: React.FormEvent<ContactFormElement>) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  // Get data from the form.
  const data = {
    email: event.currentTarget.elements.emailInput.value,
    message: event.currentTarget.elements.messageInput.value,
    terms: event.currentTarget.elements.termsInput.value,
  }

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/form'

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: 'POST',
    // Tell the server we're sending JSON.
    headers: {
      'Content-Type': 'application/json',
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json()
  alert(`Is this your full name: ${result.data}`)
}
