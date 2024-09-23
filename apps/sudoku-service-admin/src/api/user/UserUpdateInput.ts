import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SudokuGameUpdateManyWithoutUsersInput } from "./SudokuGameUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  sudokuGames?: SudokuGameUpdateManyWithoutUsersInput;
  username?: string;
};
