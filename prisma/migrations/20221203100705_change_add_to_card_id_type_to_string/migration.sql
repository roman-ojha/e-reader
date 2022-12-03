/*
  Warnings:

  - The primary key for the `AddToCard` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AddToCard" DROP CONSTRAINT "AddToCard_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AddToCard_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AddToCard_id_seq";
