
"use client";

import { Bot } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import {
  buildBoard,
  findWinner,
  playMove,
  undoMove,
  resetGame,
  resetScore,
  setMode,
} from "@/redux/store/gameSlice";

import Scoreboard from "@/components/scoreboard";
import GameBoard from "@/components/gameBoard";
import GameControls from "@/components/gameControls";
import MoveHistory from "@/components/moveHistory";

export default function HomePage() {
  const dispatch = useDispatch();
  const { moves, mode, result, score } = useSelector(
    (state) => state.gameStore
  );

  const board = buildBoard(moves);
  const winner = findWinner(board);
  const gameOver = Boolean(result);
  const winningCells = winner?.line || [];

  const computerTurn =
    mode === "computer" && moves.length % 2 === 1 && !gameOver;

  const statusText = gameOver
    ? result.type === "draw"
      ? "It's a draw!"
      : `${result.player} wins!`
    : `Player ${moves.length % 2 === 0 ? "X" : "O"}'s turn`;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Tic Tac Toe</h1>
          <p className="mt-3 text-sm text-slate-500">
            Think ahead. Make your move. Win the game.
          </p>
        </header>

        <Scoreboard score={score} />

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <GameControls
            mode={mode}
            moves={moves}
            gameOver={gameOver}
            computerTurn={computerTurn}
            onModeChange={(value) => dispatch(setMode(value))}
            onUndo={() => dispatch(undoMove())}
            onNewGame={() => dispatch(resetGame())}
            onResetScore={() => dispatch(resetScore())}
          />

          <p className="my-5 text-center font-semibold">
            {mode === "computer" && computerTurn && <Bot className="inline" />}
            {" "}{statusText}
          </p>

          <GameBoard
            board={board}
            winningCells={winningCells}
            gameOver={gameOver}
            computerTurn={computerTurn}
            onPlay={(index) => dispatch(playMove(index))}
          />
        </section>

        <MoveHistory moves={moves} mode={mode} />
      </div>
    </main>
  );
}
