import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
