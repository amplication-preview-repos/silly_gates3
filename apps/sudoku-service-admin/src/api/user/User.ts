import { Game } from "../game/Game";
import { Record } from "../record/Record";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  games?: Array<Game>;
  id: string;
  lastName: string | null;
  records?: Array<Record>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
