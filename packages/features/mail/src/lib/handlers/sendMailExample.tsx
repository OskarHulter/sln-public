import { render } from '@react-email/render'
import sendgrid from '@sendgrid/mail'
import Email from '../emails/sln-welcome-user.js'

//sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
//url='https://example.com'
const emailHtml = render(<Email />)

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml,
}

sendgrid.send(options)
