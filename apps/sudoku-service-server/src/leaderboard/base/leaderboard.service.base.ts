/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Leaderboard as PrismaLeaderboard,
  User as PrismaUser,
} from "@prisma/client";

export class LeaderboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LeaderboardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.leaderboard.count(args);
  }

  async leaderboards(
    args: Prisma.LeaderboardFindManyArgs
  ): Promise<PrismaLeaderboard[]> {
    return this.prisma.leaderboard.findMany(args);
  }
  async leaderboard(
    args: Prisma.LeaderboardFindUniqueArgs
  ): Promise<PrismaLeaderboard | null> {
    return this.prisma.leaderboard.findUnique(args);
  }
  async createLeaderboard(
    args: Prisma.LeaderboardCreateArgs
  ): Promise<PrismaLeaderboard> {
    return this.prisma.leaderboard.create(args);
  }
  async updateLeaderboard(
    args: Prisma.LeaderboardUpdateArgs
  ): Promise<PrismaLeaderboard> {
    return this.prisma.leaderboard.update(args);
  }
  async deleteLeaderboard(
    args: Prisma.LeaderboardDeleteArgs
  ): Promise<PrismaLeaderboard> {
    return this.prisma.leaderboard.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.leaderboard
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
