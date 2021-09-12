import { PrismaClient } from "@prisma/client";
import { argon2id, hash } from "argon2";

const prisma = new PrismaClient();

const seed = async (): Promise<void> => {
  const passwordHash = await hash("password", { type: argon2id });

  await prisma.user.createMany({
    data: [
      { id: "1", email: "fox@email.com", fullName: "Fox Marie", passwordHash },
      { id: "2", email: "cow@email.com", fullName: "Cow Pollin", passwordHash },
      { id: "3", email: "dog@email.com", fullName: "Dog Fuschi", passwordHash },
      { id: "4", email: "cat@email.com", fullName: "Cat Grante", passwordHash },
      { id: "5", email: "bull@email.com", fullName: "Bull Tres", passwordHash },
    ],
    skipDuplicates: true,
  });

  await prisma.shop.createMany({
    data: [
      { id: "1", name: "Fox's Pasta Emporium", ownerId: "1" },
      { id: "2", name: "Cow's Spicy Enchiladas", ownerId: "2" },
      { id: "3", name: "Dog's Raw Nut Butters", ownerId: "3" },
      { id: "4", name: "Cat's Elegant Coffee", ownerId: "4" },
      { id: "5", name: "Bull's Decadent Legumes", ownerId: "5" },
    ],
    skipDuplicates: true,
  });

  await prisma.shopCoordinates.createMany({
    data: [
      { id: "1", latitude: 37.3, longitude: -122.0, shopId: "1" }, // Cupertino
      { id: "2", latitude: 37.3, longitude: -121.9, shopId: "2" }, // San Jose
      { id: "3", latitude: 37.4, longitude: -122.1, shopId: "3" }, // Mountain View
      { id: "4", latitude: 37.4, longitude: -122.1, shopId: "4" }, // Palo Alto
      { id: "5", latitude: 37.5, longitude: -121.9, shopId: "5" }, // Fremont
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      { id: "1", name: "Ravioli", shopId: "1" },
      { id: "2", name: "Spaghetti", shopId: "1" },
      { id: "3", name: "Campanelle", shopId: "1" },
      { id: "4", name: "Regular Enchilada", shopId: "2" },
      { id: "5", name: "Extra Spicy Enchilada", shopId: "2" },
      { id: "6", name: "Mild Enchilada", shopId: "2" },
      { id: "7", name: "Almond Butter", shopId: "3" },
      { id: "8", name: "Peanut Butter", shopId: "3" },
      { id: "9", name: "Cashew Butter", shopId: "3" },
      { id: "10", name: "Espresso Blend", shopId: "4" },
      { id: "11", name: "Whole Bean", shopId: "4" },
      { id: "12", name: "Swiss-Water Decaf", shopId: "4" },
      { id: "13", name: "Kidney Beans", shopId: "5" },
      { id: "14", name: "Chickpeas", shopId: "5" },
      { id: "15", name: "Lentils", shopId: "5" },
    ],
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
