"use client";

import { RotateCcw, RotateCw } from "lucide-react";

const GameControls = ({
  mode,
  moves,
  gameOver,
  computerTurn,
  onModeChange,
  onUndo,
  onNewGame,
  onResetScore,
}) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label htmlFor="mode" className="text-sm font-semibold">
          Game mode
        </label>

        <select
          id="mode"
          value={mode}
          onChange={(event) => onModeChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        >
          <option value="two">Two Players</option>
          <option value="computer">Play vs Computer</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={onUndo}
          disabled={
            gameOver ||
            computerTurn ||
            moves.length === 0 ||
            (mode === "computer" && moves.length < 2)
          }
          className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold hover:bg-slate-200 disabled:opacity-40"
        >
          <RotateCcw size={17} /> Undo
        </button>

        <button
          onClick={onNewGame}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          <RotateCw size={17} /> New Game
        </button>
      </div>

      <button
        onClick={onResetScore}
        className="mx-auto mt-4 block rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:text-rose-600"
      >
        Reset scoreboard
      </button>
    </>
  );
}

export default  GameControls