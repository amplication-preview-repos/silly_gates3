import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecordCreateInput = {
  duration?: number | null;
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
