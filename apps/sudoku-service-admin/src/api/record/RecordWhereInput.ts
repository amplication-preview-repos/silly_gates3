import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecordWhereInput = {
  duration?: IntNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
