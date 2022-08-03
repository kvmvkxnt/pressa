import { DateResolver, DateTimeResolver, TimeResolver } from "graphql-scalars";

export default {
  DateTime: DateTimeResolver,
  Date: DateResolver,
  Time: TimeResolver
};
