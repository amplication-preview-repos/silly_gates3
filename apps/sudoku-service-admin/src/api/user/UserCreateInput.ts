import { GameCreateNestedManyWithoutUsersInput } from "./GameCreateNestedManyWithoutUsersInput";
import { RecordCreateNestedManyWithoutUsersInput } from "./RecordCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  games?: GameCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  records?: RecordCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
