import BoardCell from "./boardCell";

const GameBoard = ({
  board,
  winningCells,
  gameOver,
  computerTurn,
  onPlay,
}) => {
  return (
    <div
      role="group"
      aria-label="Tic Tac Toe board"
      className="mx-auto grid max-w-md grid-cols-3 gap-2 sm:gap-3"
    >
      {board.map((cell, index) => (
        <BoardCell
          key={index}
          cell={cell}
          index={index}
          winningCells={winningCells}
          disabled={gameOver || cell !== null || computerTurn}
          onClick={() => onPlay(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard