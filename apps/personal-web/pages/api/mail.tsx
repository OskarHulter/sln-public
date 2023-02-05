import { default as sgMail } from '@sendgrid/mail'
import { log } from 'next-axiom'
import SuperJSON from 'superjson'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function (req, res) {
  const body = SuperJSON.stringify(req.body)
  log.debug('req', { body })
  const msg = {
    to: 'oskarhulter@gmail..com', // Change to your recipient
    from: 'oskarhulter@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: body,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const result = sgMail.send(msg).catch((error) => {
    console.error(error)
  })
  return result
  // await sendHandler(req, res)
}
