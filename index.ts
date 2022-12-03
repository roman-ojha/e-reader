import express from "express";

const port = process.env.APP_PORT || 8000;
const app = express();

app.listen(port, () => {
  console.log(`Started on: http://localhost:${port}`);
});
