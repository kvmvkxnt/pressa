import { gql } from "apollo-server-express";
import { readFileSync } from "fs";
import path from "path";

import resolvers from './resolvers.js';
const schema = readFileSync(path.join(process.cwd(), 'src', 'modules', 'categories', 'schema.gql'));

export default {
  typeDefs: gql`${schema}`,
  resolvers
}
