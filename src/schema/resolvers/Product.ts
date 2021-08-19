import {
  AggregateProductResolver,
  FindFirstProductResolver,
  FindManyProductResolver,
  FindUniqueProductResolver,
  GroupByProductResolver,
  ProductRelationsResolver,
} from "@generated/type-graphql";

export const productResolvers = [
  AggregateProductResolver,
  FindFirstProductResolver,
  FindManyProductResolver,
  FindUniqueProductResolver,
  GroupByProductResolver,
  ProductRelationsResolver,
] as const;
