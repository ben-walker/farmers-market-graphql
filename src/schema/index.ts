import "reflect-metadata";

import { GraphQLSchema } from "graphql";
import { buildSchema as typeGraphqlBuildSchema } from "type-graphql";

import { NODE_ENV } from "../env";
import { resolvers } from "./resolvers";

export const buildSchema = async (): Promise<GraphQLSchema> =>
  await typeGraphqlBuildSchema({
    emitSchemaFile: NODE_ENV !== "production",
    resolvers,
  });
