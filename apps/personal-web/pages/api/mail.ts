import { mailHandler } from '@sln/data-access-shared'

export default async function handler(req, res) {
  mailHandler(req, res)
}
