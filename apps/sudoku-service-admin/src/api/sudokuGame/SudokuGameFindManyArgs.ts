import { SudokuGameWhereInput } from "./SudokuGameWhereInput";
import { SudokuGameOrderByInput } from "./SudokuGameOrderByInput";

export type SudokuGameFindManyArgs = {
  where?: SudokuGameWhereInput;
  orderBy?: Array<SudokuGameOrderByInput>;
  skip?: number;
  take?: number;
};
