import { ApolloServer } from "apollo-server-express";
import express from "express";

import { context } from "./context";
import { PORT } from "./env";
import { schema } from "./schema";

const boot = async () => {
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
