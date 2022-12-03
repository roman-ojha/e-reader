import express from "express";
import { PrismaClient } from "@prisma/client";
import { connect, disconnect } from "./config/db.js";
import log from "./utils/console.js";
const prisma = new PrismaClient();

const port = process.env.APP_PORT || 8000;
const app = express();

// Database connection
connect();

async function main() {
  const createUser = await prisma.user.create({
    data: {
      username: "roman",
      password: "fdsafsa",
      email: "razz@gmail.com",
      first_name: "roman",
      last_name: "ojha",
    },
  });
  log.success(createUser, "development");
}

main()
  .catch((err) => {
    log.error(err, "development");
  })
  .finally(async () => {
    await disconnect();
  });

app.listen(port, () => {
  console.log(`
  Express E-Reader ===========
  Local: http://127.0.0.1:${port}`);
});
