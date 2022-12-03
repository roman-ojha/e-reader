/*
  Warnings:

  - The primary key for the `BookReview` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BookReview" DROP CONSTRAINT "BookReview_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "BookReview_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "BookReview_id_seq";
