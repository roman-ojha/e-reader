import typeDefs from "../graphql/schema/index.js";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// generate 'schema.graphql' file to generate typescript types from one Schema file using 'codegen'
(() => {
  fs.writeFileSync(
    path.join(__dirname, "../graphql/schema/generated.graphql"),
    typeDefs,
    "utf8"
  );
})();
