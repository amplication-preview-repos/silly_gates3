import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SudokuGameService } from "./sudokuGame.service";
import { SudokuGameControllerBase } from "./base/sudokuGame.controller.base";

@swagger.ApiTags("sudokuGames")
@common.Controller("sudokuGames")
export class SudokuGameController extends SudokuGameControllerBase {
  constructor(
    protected readonly service: SudokuGameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
