import { PrismaClient } from "@prisma/client";
import log from "../utils/console.js";
const prisma = new PrismaClient();

async function connect() {
  await prisma
    .$connect()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      log.error(err, "development");
    });
}

async function disconnect() {
  await prisma
    .$disconnect()
    .then(() => {})
    .catch((err) => {
      log.error(err, "development");
    });
}

export { connect, disconnect };
