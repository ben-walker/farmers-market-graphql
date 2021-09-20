-- DropForeignKey
ALTER TABLE "ShopCoordinates" DROP CONSTRAINT "ShopCoordinates_shopId_fkey";

-- AddForeignKey
ALTER TABLE "ShopCoordinates" ADD CONSTRAINT "ShopCoordinates_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
