-- CreateTable
CREATE TABLE "CurrentlyReading" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentlyReading_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CurrentlyReading" ADD CONSTRAINT "CurrentlyReading_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurrentlyReading" ADD CONSTRAINT "CurrentlyReading_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
