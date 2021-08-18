import { shopResolvers } from "./Shop";
import { userResolvers } from "./User";

export const resolvers = [...shopResolvers, ...userResolvers] as const;
