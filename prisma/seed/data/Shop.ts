import { Prisma } from "@prisma/client";

export const shopInput: Prisma.ShopCreateManyInput[] = [
  {
    id: "1",
    name: "Fox's Pasta Emporium",
    serveRadius: 3000,
    ownerId: "1",
  },
  {
    id: "2",
    name: "Cow's Spicy Enchiladas",
    serveRadius: 5000,
    ownerId: "2",
  },
  {
    id: "3",
    name: "Dog's Raw Nut Butters",
    serveRadius: 10000,
    ownerId: "3",
  },
  {
    id: "4",
    name: "Cat's Elegant Coffee",
    serveRadius: 1500,
    ownerId: "4",
  },
  {
    id: "5",
    name: "Bull's Decadent Legumes",
    serveRadius: 12000,
    ownerId: "5",
  },
];
