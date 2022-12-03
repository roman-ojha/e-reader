/*
  Warnings:

  - The primary key for the `StoreBookReview` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "StoreBookReview" DROP CONSTRAINT "StoreBookReview_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "StoreBookReview_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "StoreBookReview_id_seq";
