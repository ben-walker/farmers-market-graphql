import { PrismaClient } from "@prisma/client";
import { argon2id, hash } from "argon2";

const prisma = new PrismaClient();

export const seed = async (): Promise<void> => {
  const passwordHash = await hash("password", { type: argon2id });

  await prisma.user.createMany({
    data: [
      { email: "fox@email.com", passwordHash },
      { email: "cow@email.com", passwordHash },
      { email: "dog@email.com", passwordHash },
    ],
    skipDuplicates: true,
  });
};
