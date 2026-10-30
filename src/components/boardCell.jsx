const BoardCell = ({
  cell,
  index,
  winningCells,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={`Cell ${index + 1}${cell ? `, ${cell}` : ", empty"}`}
      onClick={onClick}
      className={`flex aspect-square items-center justify-center rounded-2xl border-2 text-5xl font-extrabold transition sm:text-6xl
        ${
          winningCells.includes(index)
            ? "border-emerald-400 bg-emerald-50"
            : "border-slate-200 bg-slate-50"
        }
        ${
          cell === "X"
            ? "text-indigo-600"
            : cell === "O"
              ? "text-rose-500"
              : ""
        }
        ${
          !disabled
            ? "cursor-pointer hover:border-indigo-300 hover:bg-indigo-50"
            : "cursor-default"
        }`}
    >
      {cell}
    </button>
  );
}


export default  BoardCell