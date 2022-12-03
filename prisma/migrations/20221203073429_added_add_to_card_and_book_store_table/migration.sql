/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "AddToCard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AddToCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookStore" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AddToCard_userId_key" ON "AddToCard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BookStore_bookId_key" ON "BookStore"("bookId");

-- CreateIndex
CREATE INDEX "BookStore_price_discount_idx" ON "BookStore"("price", "discount");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "AddToCard" ADD CONSTRAINT "AddToCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookStore" ADD CONSTRAINT "BookStore_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
