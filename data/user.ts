import { AddUserInput } from "../graphql/generated/types";

export default <AddUserInput[]>[
  {
    username: "razz-roman",
    first_name: "roman",
    last_name: "razz",
    email: "razz@gmail.com",
    password: "razz",
    role: "ADMIN",
  },
  {
    username: "roman-ojha",
    first_name: "roman",
    last_name: "ojha",
    email: "roman@gmail.com",
    password: "roman",
    role: "USER",
  },
  {
    username: "jack",
    first_name: "jack",
    last_name: "reacher",
    email: "jack@gmail.com",
    password: "jack",
    role: "USER",
  },
];
