import { PrismaClient } from "@prisma/client";

import {
  productInput,
  shopCoordinatesInput,
  shopInput,
  userInput,
} from "./data";

const prisma = new PrismaClient();

const seed = async (): Promise<void> => {
  await prisma.user.createMany({ data: userInput, skipDuplicates: true });
  await prisma.shop.createMany({ data: shopInput, skipDuplicates: true });
  await prisma.shopCoordinates.createMany({
    data: shopCoordinatesInput,
    skipDuplicates: true,
  });
  await prisma.product.createMany({ data: productInput, skipDuplicates: true });
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void (async () => {
      await prisma.$disconnect();
    })();
  });
