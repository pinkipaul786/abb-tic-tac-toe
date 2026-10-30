
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./store/gameSlice";

export const store = configureStore({
  reducer: {
    gameStore: gameReducer,
  },
});

