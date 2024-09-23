import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type SudokuGame = {
  board: JsonValue;
  createdAt: Date;
  id: string;
  solvedBoard: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
