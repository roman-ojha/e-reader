module.exports = {
  projects: {
    app: {
      schema: ["schema/*.graphql"],
      documents: ["schema/*.graphql"],
    },
    db: {
      schema: "src/generated/db.graphql",
      documents: ["src/db/**/*.graphql", "my/fragments.graphql"],
      extensions: {
        codegen: [
          {
            generator: "graphql-binding",
            language: "typescript",
            output: {
              binding: "src/generated/db.ts",
            },
          },
        ],
      },
    },
  },
};
