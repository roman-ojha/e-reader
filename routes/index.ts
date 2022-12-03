import express from "express";
import { graphqlHTTP } from "express-graphql";

const router = express.Router();

router.use("/graphql", graphqlHTTP(<any>{}));

export default router;
