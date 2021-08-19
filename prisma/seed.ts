import { PrismaClient } from "@prisma/client";
import { argon2id, hash } from "argon2";

const prisma = new PrismaClient();

export const seed = async (): Promise<void> => {
  const passwordHash = await hash("password", { type: argon2id });

  await prisma.user.createMany({
    data: [
      { id: "1", email: "fox@email.com", passwordHash },
      { id: "2", email: "cow@email.com", passwordHash },
      { id: "3", email: "dog@email.com", passwordHash },
      { id: "4", email: "cat@email.com", passwordHash },
      { id: "5", email: "bull@email.com", passwordHash },
    ],
    skipDuplicates: true,
  });

  await prisma.shop.createMany({
    data: [
      { id: "1", name: "Cat's Organic Produce", ownerId: "4" },
      { id: "2", name: "Bull's Decadent Legumes", ownerId: "5" },
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      { id: "1", name: "Red pepper", shopId: "1" },
      { id: "2", name: "Zucchini", shopId: "1" },
      { id: "3", name: "Lentils", shopId: "2" },
      { id: "4", name: "Kidney beans", shopId: "2" },
    ],
    skipDuplicates: true,
  });
};
