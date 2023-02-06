import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { createServer } from "http"
import { parse } from "url"
import { api } from "../utils/api"
import "../styles/globals.css"
import next from "next"

//We will implement this in a minute
//import TicTacToeService from "./TicTacToeServer";

const port = parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)

    handle(req, res, parsedUrl)
  }).listen(port)

  //once we have an http server listening to next routes,
  //we can listen to it and bind our Socket.io server!
  //new TicTacToeService(server);

  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
    }`
  )
})



const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
