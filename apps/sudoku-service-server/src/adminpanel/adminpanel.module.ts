import { Module } from "@nestjs/common";
import { AdminPanelService } from "./adminpanel.service";
import { AdminPanelController } from "./adminpanel.controller";
import { AdminPanelResolver } from "./adminpanel.resolver";

@Module({
  controllers: [AdminPanelController],
  providers: [AdminPanelService, AdminPanelResolver],
  exports: [AdminPanelService],
})
export class AdminPanelModule {}
