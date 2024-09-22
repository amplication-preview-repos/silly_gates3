import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameListRelationFilter } from "../game/GameListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  games?: GameListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  records?: RecordListRelationFilter;
  username?: StringFilter;
};
