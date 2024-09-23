import { SudokuGameWhereUniqueInput } from "./SudokuGameWhereUniqueInput";
import { SudokuGameUpdateInput } from "./SudokuGameUpdateInput";

export type UpdateSudokuGameArgs = {
  where: SudokuGameWhereUniqueInput;
  data: SudokuGameUpdateInput;
};
