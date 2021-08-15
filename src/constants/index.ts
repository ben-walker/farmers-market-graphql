const { env } = process;

export const PORT = env.PORT || 4000;
export const NODE_ENV = env.NODE_ENV || "development";
export const IS_PRODUCTION = NODE_ENV === "production";
export const SECRET = env.SECRET || "";
export const REDIS_URL = env.REDIS_URL;
export const CORS_ORIGIN = env.CORS_ORIGIN?.split(",") || true;
