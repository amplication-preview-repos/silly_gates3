import { Leaderboard } from "../leaderboard/Leaderboard";
import { JsonValue } from "type-fest";
import { SudokuGame } from "../sudokuGame/SudokuGame";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaderboards?: Array<Leaderboard>;
  roles: JsonValue;
  sudokuGames?: Array<SudokuGame>;
  updatedAt: Date;
  username: string;
};
