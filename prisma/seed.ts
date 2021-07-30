import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seed = async (): Promise<void> => {
  await prisma.user.createMany({
    data: [{ email: "fox@email.com" }, { email: "cow@email.com" }],
    skipDuplicates: true,
  });
};
