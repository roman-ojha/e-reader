-- CreateTable
CREATE TABLE "StoreBookReview" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookStoreId" INTEGER NOT NULL,
    "rate" INTEGER NOT NULL DEFAULT 0,
    "review" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoreBookReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StoreBookReview" ADD CONSTRAINT "StoreBookReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoreBookReview" ADD CONSTRAINT "StoreBookReview_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
