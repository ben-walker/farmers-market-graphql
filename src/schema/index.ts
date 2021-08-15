import "reflect-metadata";

import { GraphQLSchema } from "graphql";
import { buildSchema as typeGraphqlBuildSchema } from "type-graphql";

import { IS_PRODUCTION } from "../constants";
import { resolvers } from "./resolvers";

export const buildSchema = async (): Promise<GraphQLSchema> =>
  await typeGraphqlBuildSchema({
    emitSchemaFile: !IS_PRODUCTION,
    resolvers,
  });
