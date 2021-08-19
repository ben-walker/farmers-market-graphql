import { productResolvers } from "./Product";
import { shopResolvers } from "./Shop";
import { userResolvers } from "./User";

export const resolvers = [
  ...productResolvers,
  ...shopResolvers,
  ...userResolvers,
] as const;
