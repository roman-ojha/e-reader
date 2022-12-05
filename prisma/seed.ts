import { PrismaClient } from "@prisma/client";
import log from "../utils/console.js";
import user from "../data/user.js";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: user,
  });
}

seed()
  .catch((err) => {
    log.error(err, "development");
  })
  .finally(async () => {
    log.success("Seeded data successfully", "development");
    await prisma.$disconnect();
  });
