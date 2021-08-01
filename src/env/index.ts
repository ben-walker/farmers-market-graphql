const { env } = process;

export const PORT = env.PORT || 4000;
export const NODE_ENV = env.NODE_ENV || "development";
export const SECRET = env.SECRET;
export const REDIS_URL = env.REDIS_URL;
