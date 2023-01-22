import { sendHandler } from '@sln/data-access-shared'

export default async function handler(req, res) {
  sendHandler(req, res)
}
