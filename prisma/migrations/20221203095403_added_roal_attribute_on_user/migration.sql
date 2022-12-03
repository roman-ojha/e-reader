/*
  Warnings:

  - You are about to drop the column `is_admin` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_admin",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
