import * as graphql from "@nestjs/graphql";
import { AdminPanelService } from "./adminpanel.service";

export class AdminPanelResolver {
  constructor(protected readonly service: AdminPanelService) {}
}
