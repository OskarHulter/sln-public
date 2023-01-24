import { rest, setupWorker } from 'msw'

interface LoginBody {
  username: string
}
interface LoginResponse {
  username: string
  firstName: string
}
const worker = setupWorker(
  rest.post<LoginBody, LoginResponse>('/login', async (req, res, ctx) => {
    const { username } = await req.json()
    return res(
      ctx.json({
        username,
        firstName: 'John',
      })
    )
  })
)
worker.start()
