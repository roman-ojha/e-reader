import graphql from "graphql";
const { GraphQLObjectType, GraphQLString, GraphQLID, buildSchema } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getUser: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {},
    },
  },
});
