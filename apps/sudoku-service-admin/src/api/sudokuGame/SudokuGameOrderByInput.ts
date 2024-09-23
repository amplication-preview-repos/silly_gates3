import { SortOrder } from "../../util/SortOrder";

export type SudokuGameOrderByInput = {
  board?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  solvedBoard?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
