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
      { id: "1", name: "Fox's Pasta Emporium", ownerId: "1" },
      { id: "2", name: "Cow's Spicy Enchiladas", ownerId: "2" },
      { id: "3", name: "Dog's Raw Nut Butters", ownerId: "3" },
      { id: "4", name: "Cat's Elegant Coffee", ownerId: "4" },
      { id: "5", name: "Bull's Decadent Legumes", ownerId: "5" },
    ],
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: [
      { name: "Ravioli", shopId: "1" },
      { name: "Spaghetti", shopId: "1" },
      { name: "Campanelle", shopId: "1" },
      { name: "Regular Enchilada", shopId: "2" },
      { name: "Extra Spicy Enchilada", shopId: "2" },
      { name: "Mild Enchilada", shopId: "2" },
      { name: "Almond Butter", shopId: "3" },
      { name: "Peanut Butter", shopId: "3" },
      { name: "Cashew Butter", shopId: "3" },
      { name: "Espresso Blend", shopId: "4" },
      { name: "Whole Bean", shopId: "4" },
      { name: "Swiss-Water Decaf", shopId: "4" },
      { name: "Kidney Beans", shopId: "5" },
      { name: "Chickpeas", shopId: "5" },
      { name: "Lentils", shopId: "5" },
    ],
    skipDuplicates: true,
  });
};
