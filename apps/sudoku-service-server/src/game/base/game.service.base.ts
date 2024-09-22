/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Game as PrismaGame, User as PrismaUser } from "@prisma/client";

export class GameServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GameCountArgs, "select">): Promise<number> {
    return this.prisma.game.count(args);
  }

  async games(args: Prisma.GameFindManyArgs): Promise<PrismaGame[]> {
    return this.prisma.game.findMany(args);
  }
  async game(args: Prisma.GameFindUniqueArgs): Promise<PrismaGame | null> {
    return this.prisma.game.findUnique(args);
  }
  async createGame(args: Prisma.GameCreateArgs): Promise<PrismaGame> {
    return this.prisma.game.create(args);
  }
  async updateGame(args: Prisma.GameUpdateArgs): Promise<PrismaGame> {
    return this.prisma.game.update(args);
  }
  async deleteGame(args: Prisma.GameDeleteArgs): Promise<PrismaGame> {
    return this.prisma.game.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.game
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
