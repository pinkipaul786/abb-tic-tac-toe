
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

export async function fetchScore() {
  const { data } = await api.get("/scoreboard/1");

  return {
    xWins: data.xWins ?? 0,
    oWins: data.oWins ?? 0,
    draws: data.draws ?? 0,
  };
}

export async function saveScore(score) {
  await api.patch("/scoreboard/1", score);
}

export async function saveCompletedGame(game) {
  await api.post("/games", {
    ...game,
    createdAt: new Date().toISOString(),
  });
}
