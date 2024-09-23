import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SudokuGameResolverBase } from "./base/sudokuGame.resolver.base";
import { SudokuGame } from "./base/SudokuGame";
import { SudokuGameService } from "./sudokuGame.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SudokuGame)
export class SudokuGameResolver extends SudokuGameResolverBase {
  constructor(
    protected readonly service: SudokuGameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
