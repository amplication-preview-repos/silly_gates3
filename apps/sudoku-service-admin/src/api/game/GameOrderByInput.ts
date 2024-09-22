import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  board?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
