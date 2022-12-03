/*
  Warnings:

  - The primary key for the `Genere` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_BookToGenere" DROP CONSTRAINT "_BookToGenere_B_fkey";

-- AlterTable
ALTER TABLE "Genere" DROP CONSTRAINT "Genere_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Genere_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Genere_id_seq";

-- AlterTable
ALTER TABLE "_BookToGenere" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_BookToGenere" ADD CONSTRAINT "_BookToGenere_B_fkey" FOREIGN KEY ("B") REFERENCES "Genere"("id") ON DELETE CASCADE ON UPDATE CASCADE;
