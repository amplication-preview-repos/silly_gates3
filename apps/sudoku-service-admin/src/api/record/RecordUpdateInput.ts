import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecordUpdateInput = {
  duration?: number | null;
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
