import { AuthorResolvers } from "../../graphql/generated/types";

export default <AuthorResolvers>{
  user: async (parent, args, ctx, info) => {
    console.log(parent);
    return <any>ctx.db.user.findUnique({
      where: {
        // id: parent.userId,
      },
    });
  },
};
