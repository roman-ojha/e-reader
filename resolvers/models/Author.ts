import { AuthorResolvers } from "../../graphql/generated/types";
import selectRequestedFields from "../../utils/selectRequestedFields.js";

export default <AuthorResolvers>{
  user: async (parent, args, ctx, info) => {
    const user = await ctx.db.user.findUnique({
      where: {
        id: (parent as any).userId,
      },
      select: selectRequestedFields(info),
    });
    return <any>user;
  },
};
