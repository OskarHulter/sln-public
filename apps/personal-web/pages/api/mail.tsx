import { default as sgMail } from '@sendgrid/mail'
import { log } from 'next-axiom'
import SuperJSON from 'superjson'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function (req, res) {
  const body = SuperJSON.stringify(req.body)
  log.debug('body', { body })
  const msg = {
    to: 'oskarhulter@gmail..com', // Change to your recipient
    from: 'oskarhulter@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: body,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  const result = await sgMail.send(msg).catch((error) => {
    console.error(error)
    log.debug('mail', { error })
    res.status(result[0].statusCode).json(result)
  })
  log.debug('result', { result })
  res.status(200).json(result)
  // await sendHandler(req, res)
}
