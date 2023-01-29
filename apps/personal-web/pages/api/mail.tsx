import { sendHandler } from '@sln/data-access-shared'
import SuperJSON from 'superjson'

export default async function (req, res) {
  console.log(SuperJSON.stringify(req.body))
  sendHandler(req, res)
}
