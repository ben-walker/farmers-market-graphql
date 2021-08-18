import {
  AggregateShopOwnerResolver,
  FindFirstShopOwnerResolver,
  FindManyShopOwnerResolver,
  FindUniqueShopOwnerResolver,
  GroupByShopOwnerResolver,
  ShopOwnerRelationsResolver,
} from "@generated/type-graphql";

export const shopOwnerResolvers = [
  AggregateShopOwnerResolver,
  FindFirstShopOwnerResolver,
  FindManyShopOwnerResolver,
  FindUniqueShopOwnerResolver,
  GroupByShopOwnerResolver,
  ShopOwnerRelationsResolver,
] as const;
