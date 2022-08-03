import { gql } from "apollo-server-express";
import { readFileSync } from "fs";
import path from "path";

const resolvers = {};

const schema = readFileSync(
  path.join(process.cwd(), "src", "modules", "gqltypes", "schema.gql")
);

export default {
  typeDefs: gql`
    ${schema}
  `,
  resolvers
};
