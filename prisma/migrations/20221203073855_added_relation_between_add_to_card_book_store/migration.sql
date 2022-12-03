/*
  Warnings:

  - A unique constraint covering the columns `[bookStoreId]` on the table `AddToCard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookStoreId` to the `AddToCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AddToCard" ADD COLUMN     "bookStoreId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "BookStore" ADD COLUMN     "outOfStock" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "AddToCard_bookStoreId_key" ON "AddToCard"("bookStoreId");

-- AddForeignKey
ALTER TABLE "AddToCard" ADD CONSTRAINT "AddToCard_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
