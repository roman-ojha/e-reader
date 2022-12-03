-- CreateTable
CREATE TABLE "Genere" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToGenere" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToGenere_AB_unique" ON "_BookToGenere"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToGenere_B_index" ON "_BookToGenere"("B");

-- AddForeignKey
ALTER TABLE "_BookToGenere" ADD CONSTRAINT "_BookToGenere_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToGenere" ADD CONSTRAINT "_BookToGenere_B_fkey" FOREIGN KEY ("B") REFERENCES "Genere"("id") ON DELETE CASCADE ON UPDATE CASCADE;
