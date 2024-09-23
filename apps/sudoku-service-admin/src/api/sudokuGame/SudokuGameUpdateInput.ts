import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SudokuGameUpdateInput = {
  board?: InputJsonValue;
  solvedBoard?: InputJsonValue;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
