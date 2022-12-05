import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readSchema = (relativePath: string): string => {
  return fs.readFileSync(path.join(__dirname, relativePath)).toString();
};

const typeDefs = `
${readSchema("/schema.graphql")}

${readSchema("/Query.graphql")}

${readSchema("/Mutation.graphql")}
`;

export default typeDefs;
