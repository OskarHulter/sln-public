import io from "socket.io"

export default class TictacToeService {
  /*We construct a new service that connects to an httpServer*/
  constructor(httpServer) {
    this.server = io(httpServer)

    this.games = {}

    //now that we have a websocket server,
    //we can listen to new connections!
    this.server.on("connection", (client) => {
      client
        .on("disconnect", () => {
          delete this.games[client.id]
        })
        .on("start-game", () => this.startGame(client))
        .on("play", (boxId) => this.playerPlay(client, boxId))
    })
  }

  startGame(client) {
    console.log("Client wants to start a new Game")
  }

  playerPlay(client, boxId) {
    console.log("Client wants to play")
  }
}
