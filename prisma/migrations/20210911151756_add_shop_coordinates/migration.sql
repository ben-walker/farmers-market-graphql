-- CreateTable
CREATE TABLE "ShopCoordinates" (
    "id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "shopId" TEXT NOT NULL,

    CONSTRAINT "ShopCoordinates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShopCoordinates_shopId_unique" ON "ShopCoordinates"("shopId");

-- AddForeignKey
ALTER TABLE "ShopCoordinates" ADD CONSTRAINT "ShopCoordinates_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";
