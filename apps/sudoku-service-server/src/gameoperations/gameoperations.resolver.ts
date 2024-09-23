import * as graphql from "@nestjs/graphql";
import { GameOperationsService } from "./gameoperations.service";

export class GameOperationsResolver {
  constructor(protected readonly service: GameOperationsService) {}
}
