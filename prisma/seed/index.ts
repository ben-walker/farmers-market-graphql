import { PrismaClient } from "@prisma/client";

import { coordinates, passwordHash } from "./data";
import {
  emptyArray,
  randomBoolean,
  randomInteger,
  randomString,
} from "./utils";

const prisma = new PrismaClient();

const counts = {
  userShop: 100,
  product: 10_000,
};

const seed = async (): Promise<void> => {
  // User
  await prisma.user.createMany({
    data: emptyArray(counts.userShop).map((_, i) => ({
      id: i.toString(),
      email: `${randomString()}@email.com`,
      emailVerified: randomBoolean() ? new Date() : null,
      fullName: randomString(),
      passwordHash,
    })),
    skipDuplicates: true,
  });

  // Shop
  await prisma.shop.createMany({
    data: emptyArray(counts.userShop).map((_, i) => ({
      id: i.toString(),
      name: randomString(),
      ownerId: i.toString(),
      serveRadius: randomInteger(5_000, 100_000),
    })),
    skipDuplicates: true,
  });

  // Product
  await prisma.product.createMany({
    data: emptyArray(counts.product).map((_, i) => ({
      id: i.toString(),
      name: randomString(),
      shopId: randomInteger(0, counts.userShop).toString(),
    })),
    skipDuplicates: true,
  });

  // Coordinates
  await prisma.coordinates.createMany({
    data: emptyArray(counts.userShop).map((_, i) => ({
      id: i.toString(),
      latitude: coordinates[i]?.latitude || 0,
      longitude: coordinates[i]?.longitude || 0,
      shopId: i.toString(),
    })),
    skipDuplicates: true,
  });
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
