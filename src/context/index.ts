import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Context = {
  prisma: PrismaClient;
};

export const context = (): Context => ({ prisma });
