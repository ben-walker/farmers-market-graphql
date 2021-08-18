import { shopResolvers } from "./Shop";
import { shopOwnerResolvers } from "./ShopOwner";
import { userResolvers } from "./User";

export const resolvers = [
  ...shopResolvers,
  ...shopOwnerResolvers,
  ...userResolvers,
] as const;
