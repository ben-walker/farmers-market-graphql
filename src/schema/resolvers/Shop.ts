import {
  AggregateShopResolver,
  FindFirstShopResolver,
  FindManyShopResolver,
  FindUniqueShopResolver,
  GroupByShopResolver,
  Shop,
  ShopRelationsResolver,
} from "@generated/type-graphql";
import {
  Args,
  ArgsType,
  Ctx,
  Field,
  Float,
  Query,
  Resolver,
} from "type-graphql";

import { Context } from "../../context";

@ArgsType()
class SpatialSearchArgs {
  @Field(() => Float)
  latitude!: number;

  @Field(() => Float)
  longitude!: number;
}

@Resolver(() => Shop)
export class ShopResolver {
  @Query(() => [Shop])
  async shopSpatialSearch(
    @Args() { latitude, longitude }: SpatialSearchArgs,
    @Ctx() { prisma }: Context
  ): Promise<Shop[]> {
    const shops = await prisma.$queryRaw<Shop[]>`
      SELECT *
      FROM "Shop" AS shop, "ShopCoordinates" AS coords
      WHERE shop.id = coords."shopId"
        AND earth_box(ll_to_earth(${latitude}, ${longitude}), shop."serveRadius") @> ll_to_earth(coords.latitude, coords.longitude)
        AND earth_distance(ll_to_earth(${latitude}, ${longitude}), ll_to_earth(coords.latitude, coords.longitude)) <= shop."serveRadius"
    `;

    // Serialize values for typegraphql
    return shops.map((shop) => ({
      ...shop,
      createdAt: new Date(shop.createdAt),
    }));
  }
}

export const shopResolvers = [
  ShopResolver,
  AggregateShopResolver,
  FindFirstShopResolver,
  FindManyShopResolver,
  FindUniqueShopResolver,
  GroupByShopResolver,
  ShopRelationsResolver,
] as const;
