import Query from "./Query.js";
import Mutation from "./Mutation.js";
import Author from "./models/Author.js";
import { Resolvers } from "../graphql/generated/types";

export default <Resolvers>{
  Query,
  Mutation,
  Author,
};
