import { PrismaClient, User } from "@prisma/client";
import { Request } from "express";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
  req: Request;
  user: User | null;
};

export const context = async ({ req }: { req: Request }): Promise<Context> => {
  const userId = req.session.userId;
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return { prisma, req, user };
};
