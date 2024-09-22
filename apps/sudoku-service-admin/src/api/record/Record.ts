import { User } from "../user/User";

export type Record = {
  createdAt: Date;
  duration: number | null;
  id: string;
  score: number | null;
  updatedAt: Date;
  user?: User | null;
};
