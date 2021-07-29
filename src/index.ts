import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import { context } from "./context";
import { NODE_ENV, PORT } from "./env";
import { resolvers } from "./resolvers";

const boot = async () => {
  const schema = await buildSchema({
    emitSchemaFile: NODE_ENV !== "production",
    resolvers,
  });

  const server = new ApolloServer({
    context,
    schema,
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.info(`GraphQL server: port ${PORT}, path ${server.graphqlPath}`);
  });
};

boot().catch(console.error);
