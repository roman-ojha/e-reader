/*
  Warnings:

  - The primary key for the `BookStore` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "AddToCard" DROP CONSTRAINT "AddToCard_bookStoreId_fkey";

-- DropForeignKey
ALTER TABLE "StoreBookReview" DROP CONSTRAINT "StoreBookReview_bookStoreId_fkey";

-- AlterTable
ALTER TABLE "AddToCard" ALTER COLUMN "bookStoreId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "BookStore" DROP CONSTRAINT "BookStore_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BookStore_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BookStore_id_seq";

-- AlterTable
ALTER TABLE "StoreBookReview" ALTER COLUMN "bookStoreId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "AddToCard" ADD CONSTRAINT "AddToCard_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBookReview" ADD CONSTRAINT "StoreBookReview_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
