import { Prisma } from "@prisma/client";

export const productInput: Prisma.ProductCreateManyInput[] = [
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
];
