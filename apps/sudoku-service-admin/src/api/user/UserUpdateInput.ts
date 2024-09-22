import { GameUpdateManyWithoutUsersInput } from "./GameUpdateManyWithoutUsersInput";
import { RecordUpdateManyWithoutUsersInput } from "./RecordUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  games?: GameUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  records?: RecordUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
