import connectRedis from "connect-redis";
import session, { SessionOptions } from "express-session";

import { IS_PRODUCTION, SECRET } from "../constants";
import { redisClient } from "../redis";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const RedisStore = connectRedis(session);

export const sessionOptions: SessionOptions = {
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
  store: new RedisStore({ client: redisClient }),
};
