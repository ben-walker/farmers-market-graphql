import { ApolloServer } from "apollo-server-express";
import express from "express";
import session from "express-session";

import { CORS_ORIGIN, PORT } from "./constants";
import { context } from "./context";
import { buildSchema } from "./schema";
import { sessionOptions } from "./session";

const boot = async () => {
  const schema = await buildSchema();
  const server = new ApolloServer({
    context,
    schema,
  });
  await server.start();

  const app = express();
  app.use(session(sessionOptions));
  server.applyMiddleware({
    app,
    cors: { credentials: true, origin: CORS_ORIGIN },
  });

  await new Promise<void>((resolve) => app.listen({ port: PORT }, resolve));
  console.info(`🚀 GraphQL server: port ${PORT}, path ${server.graphqlPath}`);
};

boot().catch(console.error);
