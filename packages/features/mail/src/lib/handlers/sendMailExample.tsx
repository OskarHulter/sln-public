import { render } from '@react-email/render'
//import sendgrid from '@sendgrid/mail'
import Email from '../emails/sln-welcome-user'

//sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
//url='https://example.com'
const emailHtml = render(<Email />)

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml,
}
console.log('🚀 ~ file: sendMailExample.tsx:15 ~ options', options)

//sendgrid.send(options)
