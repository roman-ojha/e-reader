import { MutationResolvers } from "../graphql/generated/types";

export default <MutationResolvers>{
  addUser: async (_, args, ctx, info) => {
    const data = args.addUserCriteria;
    const user = await ctx.db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
        role: data.role,
      },
    });
    return <any>user;
  },
};
