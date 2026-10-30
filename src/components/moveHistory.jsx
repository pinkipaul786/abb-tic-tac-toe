import { History } from "lucide-react";

const MoveHistory = ({ moves, mode }) =>{
  return (
    <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <History size={20} /> Move History
        </h2>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {moves.length} moves
        </span>
      </div>

      {moves.length === 0 ? (
        <p className="py-6 text-center text-sm text-slate-400">
          No moves yet. Click any square to begin.
        </p>
      ) : (
        <ol className="space-y-2">
          {moves.map((move) => (
            <li
              key={`${move.number}-${move.index}`}
              className="grid grid-cols-[32px_24px_1fr_auto] items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm"
            >
              <span className="text-xs font-semibold text-slate-400">
                {String(move.number).padStart(2, "0")}
              </span>

              <span
                className={
                  move.player === "X"
                    ? "font-extrabold text-indigo-600"
                    : "font-extrabold text-rose-500"
                }
              >
                {move.player}
              </span>

              <span className="font-medium">
                {mode === "computer" && move.player === "O"
                  ? "Computer"
                  : `Player ${move.player}`}
              </span>

              <span className="text-right text-xs text-slate-500">
                Row {Math.floor(move.index / 3) + 1}, Col{" "}
                {(move.index % 3) + 1}
              </span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default MoveHistory