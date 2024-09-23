import { Module } from "@nestjs/common";
import { GameOperationsService } from "./gameoperations.service";
import { GameOperationsController } from "./gameoperations.controller";
import { GameOperationsResolver } from "./gameoperations.resolver";

@Module({
  controllers: [GameOperationsController],
  providers: [GameOperationsService, GameOperationsResolver],
  exports: [GameOperationsService],
})
export class GameOperationsModule {}
