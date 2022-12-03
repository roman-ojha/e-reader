-- DropIndex
DROP INDEX "AddToCard_bookStoreId_key";

-- DropIndex
DROP INDEX "AddToCard_userId_key";

-- DropIndex
DROP INDEX "Book_authorId_key";

-- CreateTable
CREATE TABLE "PurchasedBook" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "PurchasedBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchasedBook" ADD CONSTRAINT "PurchasedBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedBook" ADD CONSTRAINT "PurchasedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
