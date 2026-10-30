import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moves: [],
  mode: "two",
  result: null,
  score: { xWins: 0, oWins: 0, draws: 0 },
};

export const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function buildBoard(moves) {
  const board = Array(9).fill(null);

  moves.forEach(({ index, player }) => {
    board[index] = player;
  });

  return board;
}

export function findWinner(board) {
  for (const line of winningLines) {
    const [a, b, c] = line;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], line };
    }
  }

  return null;
}

function getOutcome(moves) {
  const board = buildBoard(moves);
  const winner = findWinner(board);

  if (winner) {
    return { type: "win", player: winner.player };
  }

  if (board.every(Boolean)) {
    return { type: "draw", player: null };
  }

  return null;
}

const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    playMove(state, action) {
      const index = action.payload;
      const board = buildBoard(state.moves);

      if (
        state.result ||
        index < 0 ||
        index > 8 ||
        board[index] !== null
      ) {
        return;
      }

      const player = state.moves.length % 2 === 0 ? "X" : "O";

      state.moves.push({
        index,
        player,
        number: state.moves.length + 1,
      });

      const outcome = getOutcome(state.moves);

      if (outcome) {
        state.result = outcome;

        if (outcome.type === "draw") {
          state.score.draws += 1;
        } else if (outcome.player === "X") {
          state.score.xWins += 1;
        } else {
          state.score.oWins += 1;
        }
      }
    },

    undoMove(state) {
      if (state.result || state.moves.length === 0) return;

      if (state.mode === "computer") {
        if (state.moves.length >= 2) {
          state.moves.splice(-2);
        } else {
          state.moves.pop();
        }
      } else {
        state.moves.pop();
      }
    },

    resetGame(state) {
      state.moves = [];
      state.result = null;
    },

    setMode(state, action) {
      state.mode = action.payload;
      state.moves = [];
      state.result = null;
    },

    resetScore(state) {
      state.score = { xWins: 0, oWins: 0, draws: 0 };
    },

    loadScore(state, action) {
      state.score = action.payload;
    },
  },
});

export const {
  playMove,
  undoMove,
  resetGame,
  setMode,
  resetScore,
  loadScore,
} = gameSlice.actions;

export default gameSlice.reducer;