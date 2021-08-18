import {
  AggregateShopResolver,
  FindFirstShopResolver,
  FindManyShopResolver,
  FindUniqueShopResolver,
  GroupByShopResolver,
  ShopRelationsResolver,
} from "@generated/type-graphql";

export const shopResolvers = [
  AggregateShopResolver,
  FindFirstShopResolver,
  FindManyShopResolver,
  FindUniqueShopResolver,
  GroupByShopResolver,
  ShopRelationsResolver,
] as const;
