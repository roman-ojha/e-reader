import { QueryResolvers, User } from "../graphql/generated/types";
import selectRequestedFields from "../utils/selectRequestedFields.js";

export default <QueryResolvers>{
  getUsers: async (_, args, ctx, info) => {
    // console.log(info.schema.getType("User"));
    const users = await ctx.db.user.findMany({
      select: selectRequestedFields(info),
    });
    return <any>users;
  },
  getUser: async (_, args, ctx, info) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: args.id,
      },
    });
    return user;
  },
  getAuthors: async (_, __, ctx, info) => {
    const authors = await ctx.db.author.findMany({
      select: {
        ...selectRequestedFields(info),
        user: false,
        userId: true,
      },
    });
    return <any>authors;
  },
  getAuthor: async (_, args, ctx, info) => {
    return await ctx.db.author.findUnique({
      where: {
        id: args.id,
      },
    });
  },
};
