import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import express from "express";
import session, { SessionOptions } from "express-session";
import Redis from "ioredis";

import {
  CORS_ORIGIN,
  IS_PRODUCTION,
  PORT,
  REDIS_URL,
  SECRET,
} from "./constants";
import { context } from "./context";
import { buildSchema } from "./schema";

const redis = new Redis(REDIS_URL);
const RedisStore = connectRedis(session);

const sessionOptions: SessionOptions = {
  cookie: {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1_000, // 30 days
    sameSite: IS_PRODUCTION || "none",
    secure: true,
  },
  name: "user_session",
  saveUninitialized: false,
  resave: false,
  rolling: true,
  secret: SECRET,
  store: new RedisStore({ client: redis }),
};

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
