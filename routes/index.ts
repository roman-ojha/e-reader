import express from "express";
import { graphqlHTTP } from "express-graphql";
import { context } from "../graphql/context.js";

const router = express.Router();

// router.use("/graphql", graphqlHTTP({ context: context, schema: {} }));

export default router;
