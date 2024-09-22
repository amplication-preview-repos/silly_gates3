import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GameUpdateInput = {
  board?: InputJsonValue;
  endTime?: Date | null;
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
