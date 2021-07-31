import {
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
} from "@generated/type-graphql";

import { UserResolver } from "./User";

export const resolvers = [
  AggregateUserResolver,
  FindFirstUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
  GroupByUserResolver,
  UserResolver,
] as const;
