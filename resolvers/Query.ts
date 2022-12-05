import { QueryResolvers } from "../graphql/generated/types";

export default <QueryResolvers>{
  getUser: (_, __, ctx, info) => {
    console.log(info.schema.getType("User"));
    return <any>{};
  },
};
