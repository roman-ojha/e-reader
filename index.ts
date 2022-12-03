import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const port = process.env.APP_PORT || 8000;
const app = express();

app.listen(port, () => {
  console.log(`
  Express E-Reader ===========
  Local: http://127.0.0.1:${port}`);
});
