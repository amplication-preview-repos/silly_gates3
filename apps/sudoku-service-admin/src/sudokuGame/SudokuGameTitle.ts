import { SudokuGame as TSudokuGame } from "../api/sudokuGame/SudokuGame";

export const SUDOKUGAME_TITLE_FIELD = "id";

export const SudokuGameTitle = (record: TSudokuGame): string => {
  return record.id?.toString() || String(record.id);
};
