import express from "express";
import { connect, disconnect, prisma } from "./config/prisma.js";
import log from "./utils/console.js";
import router from "routes/index.js";

const port = process.env.APP_PORT || 8000;
const app = express();

// Database connection
connect();

// using router
app.use(router);

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

// main()
//   .catch((err) => {
//     log.error(err, "development");
//   })
//   .finally(async () => {
//     await disconnect();
//   });

app.listen(port, () => {
  log.success(
    `
Express E-Reader ===========
Local: http://127.0.0.1:${port}`,
    "development"
  );
});
