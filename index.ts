import express from "express";
import { connect, disconnect, prisma } from "./config/prisma.js";
import log from "./utils/console.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = process.env.APP_PORT || 8000;

// Database connection
connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

import "./config/db.js";

startStandaloneServer(server, {
  listen: { port: 8000 },
  context: createContext,
})
  .then(({ url }) => {
    log.success("🚀  Server ready at: ${url}", "development");
  })
  .catch((err) => {});
