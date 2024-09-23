import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SudokuGameWhereInput = {
  board?: JsonFilter;
  id?: StringFilter;
  solvedBoard?: JsonFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
