import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Game = {
  board: JsonValue;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
