import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminPanelService } from "./adminpanel.service";

@swagger.ApiTags("adminPanels")
@common.Controller("adminPanels")
export class AdminPanelController {
  constructor(protected readonly service: AdminPanelService) {}
}
