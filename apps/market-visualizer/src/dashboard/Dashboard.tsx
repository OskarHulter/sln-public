import React from "react"
import { Box } from "./Box"
import { AlertModal } from "./AlertModal"

enum BoxValue {
  EMPTY,
  BOT,
  PLAYER
}

enum Players {
  BOT,
  PLAYER
}

const playerLabel = {
  [Players.BOT]: <i className={"far fa-circle"} />,
  [Players.PLAYER]: <i className={"fas fa-times"} />
}

export function Game() {
  const game = useStore((store) => store.game)
  const isOnline = useStore((store) => store.ready)
  const actions = useStore((store) => store.actions)
  const turnIcon = game ? playerLabel[game.playerTurn] : null

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>

      {/*Remember this component from part 1? Now we can use it!

      1/ show a modal if client is not connected to the socket
      2/ show "It's a Draw" if the game ended with a draw
      3/ show the Winner if the game ended with a winner*/}
      <AlertModal open={!isOnline}>
        <h2>Not Connected</h2>
        <sub>Please wait</sub>
      </AlertModal>

      <AlertModal open={game !== null && game.draw}>
        <h2>It&apos;s a Tie</h2>
        <button onClick={actions.startGame}>Play Again</button>
      </AlertModal>

      <AlertModal open={game !== null && game.winner !== null}>
        {game?.winner === Players.PLAYER && <h2>You win!</h2>}
        {game?.winner === Players.BOT && <h2>You loose!</h2>}
        <button onClick={actions.startGame}>Play Again</button>
      </AlertModal>

      <div className="game">
        {/*... unchanged*/}
      </div>
      );
}
