import { Prisma } from "@prisma/client";

export const shopCoordinatesInput: Prisma.ShopCoordinatesCreateManyInput[] = [
  { id: "1", latitude: 37.322998, longitude: -122.032182, shopId: "1" }, // Cupertino
  { id: "2", latitude: 40.749276, longitude: -73.985643, shopId: "2" }, // Empire State Building
  { id: "3", latitude: 29.97648, longitude: 31.131302, shopId: "3" }, // Pyramids of Giza
  { id: "4", latitude: 40.689266, longitude: -74.044512, shopId: "4" }, // Statue of Liberty
  { id: "5", latitude: 48.858093, longitude: 2.294694, shopId: "5" }, // Eiffel Tower
];
