import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GameOperationsService } from "./gameoperations.service";

@swagger.ApiTags("gameOperations")
@common.Controller("gameOperations")
export class GameOperationsController {
  constructor(protected readonly service: GameOperationsService) {}
}
