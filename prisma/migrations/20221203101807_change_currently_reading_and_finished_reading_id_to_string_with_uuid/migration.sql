/*
  Warnings:

  - The primary key for the `CurrentlyReading` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FinishedReading` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CurrentlyReading" DROP CONSTRAINT "CurrentlyReading_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CurrentlyReading_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CurrentlyReading_id_seq";

-- AlterTable
ALTER TABLE "FinishedReading" DROP CONSTRAINT "FinishedReading_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FinishedReading_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FinishedReading_id_seq";
