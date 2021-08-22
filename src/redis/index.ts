import Redis from "ioredis";

import { REDIS_URL } from "../constants";

export const redisClient = new Redis(REDIS_URL);
