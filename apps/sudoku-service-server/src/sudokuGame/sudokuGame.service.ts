import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SudokuGameServiceBase } from "./base/sudokuGame.service.base";

@Injectable()
export class SudokuGameService extends SudokuGameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
