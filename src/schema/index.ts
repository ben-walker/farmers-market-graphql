import "reflect-metadata";

import { buildSchemaSync } from "type-graphql";

import { NODE_ENV } from "../env";
import { resolvers } from "./resolvers";

export const schema = buildSchemaSync({
  emitSchemaFile: NODE_ENV !== "production",
  resolvers,
});
