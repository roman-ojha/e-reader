import { connect } from "./config/prisma.js";
import log from "./utils/console.js";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import { createContext } from "./graphql/context.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 8000 },
  context: createContext,
})
  .then(({ url }) => {
    log.success(`🚀  Server ready at: ${url}`, "development");
    // Database connection
    connect();
  })
  .catch((err) => {
    log.error(err, "development");
  });
