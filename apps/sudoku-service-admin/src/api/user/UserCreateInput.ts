import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SudokuGameCreateNestedManyWithoutUsersInput } from "./SudokuGameCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  sudokuGames?: SudokuGameCreateNestedManyWithoutUsersInput;
  username: string;
};
