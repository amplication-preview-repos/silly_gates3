import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SudokuGameModuleBase } from "./base/sudokuGame.module.base";
import { SudokuGameService } from "./sudokuGame.service";
import { SudokuGameController } from "./sudokuGame.controller";
import { SudokuGameResolver } from "./sudokuGame.resolver";

@Module({
  imports: [SudokuGameModuleBase, forwardRef(() => AuthModule)],
  controllers: [SudokuGameController],
  providers: [SudokuGameService, SudokuGameResolver],
  exports: [SudokuGameService],
})
export class SudokuGameModule {}
