import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { SudokuGameListRelationFilter } from "../sudokuGame/SudokuGameListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaderboards?: LeaderboardListRelationFilter;
  sudokuGames?: SudokuGameListRelationFilter;
  username?: StringFilter;
};
