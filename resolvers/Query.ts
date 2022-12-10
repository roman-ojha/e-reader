import { QueryResolvers, User } from "../graphql/generated/types";

export default <QueryResolvers>{
  getUsers: async (_, args, ctx, info) => {
    // console.log(info.schema.getType("User"));
    const users = await ctx.db.user.findMany();
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
  getAuthor: (_, __, ctx, info) => {},
};
