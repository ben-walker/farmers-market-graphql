import { ApolloServer } from "apollo-server-express";
import express from "express";
import session, { SessionOptions } from "express-session";

import { context } from "./context";
import { PORT, SECRET } from "./env";
import { schema } from "./schema";

const sessionOptions: SessionOptions = {
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1_000, // 30 days
    sameSite: true,
    secure: true,
  },
  name: "user_session",
  saveUninitialized: false,
  rolling: true,
  secret: SECRET,
};

const boot = async () => {
  const server = new ApolloServer({
    context,
    schema,
  });
  await server.start();

  const app = express();
  app.use(session(sessionOptions));
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.info(`🚀 GraphQL server: port ${PORT}, path ${server.graphqlPath}`);
  });
};

boot().catch(console.error);
