// https://github.com/prisma-korea/graphql-schema-generator/issues/34
// https://www.npmjs.com/package/@akumzy/graphql-schema-generator
// https://github.com/prisma-korea/graphql-schema-generator/pull/46

const { SDL } = require("@prisma-korea/graphql-schema-generator");

const rules = {
  beforeAddingTypeModifiers: [
    {
      matcher: (field, model) => {
        // const {name} = field;
        // if (name === 'deletedAt') {
        //   return true;
        // }
        // return false;
        if (field.name === "id" && model.name === "Author") {
          return true;
        }
        return false;
      },
      transformer: (field) => {
        // console.log(field);
        console.log(field);
        return {
          ...field,
        };
      },
    },
  ],
};

module.exports = { rules };
