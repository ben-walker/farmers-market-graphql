import {
  AggregateShopResolver,
  FindFirstShopResolver,
  FindManyShopArgs,
  FindManyShopResolver,
  FindUniqueShopResolver,
  GroupByShopResolver,
  Shop,
  ShopRelationsResolver,
  ShopWhereUniqueInput,
} from "@generated/type-graphql";
import { Prisma } from "@prisma/client";
import { Args, ArgsType, Ctx, Field, Int, Query, Resolver } from "type-graphql";

import { Context } from "../../context";

@ArgsType()
class NearbyLocationsArgs implements FindManyShopArgs {
  @Field()
  latitude!: number;

  @Field()
  longitude!: number;

  @Field(() => Int, { nullable: true })
  take: FindManyShopArgs["take"];

  @Field(() => Int, { nullable: true })
  skip: FindManyShopArgs["skip"];

  @Field(() => ShopWhereUniqueInput, { nullable: true })
  cursor: FindManyShopArgs["cursor"];
}

@Resolver(() => Shop)
export class ShopResolver {
  @Query(() => [Shop])
  async shopGetNearbyLocations(
    @Args() { latitude, longitude, take, skip, cursor }: NearbyLocationsArgs,
    @Ctx() { prisma }: Context
  ): Promise<Shop[]> {
    const shops = await prisma.$queryRaw<Shop[]>`
      SELECT *
      FROM "Shop" AS shop, "ShopCoordinates" AS coords
      WHERE shop.id = coords."shopId"
        AND earth_box(ll_to_earth(${latitude}, ${longitude}), shop."serveRadius") @> ll_to_earth(coords.latitude, coords.longitude)
        AND earth_distance(ll_to_earth(${latitude}, ${longitude}), ll_to_earth(coords.latitude, coords.longitude)) <= shop."serveRadius"
        AND shop.id >= ${cursor?.id || ""}
      ORDER BY shop.id ASC
      OFFSET ${skip || 0}
      LIMIT ${take || Prisma.sql`ALL`}
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
