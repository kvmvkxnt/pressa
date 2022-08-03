import { makeExecutableSchema } from '@graphql-tools/schema';
import { DateTimeResolver, DateTimeTypeDefinition, DateTypeDefinition, TimeTypeDefinition } from 'graphql-scalars';
import categories from './categories/index.js';
import comments from './comments/index.js';
import events from './events/index.js';
import gqltypes from './gqltypes/index.js';
import users from './users/index.js';
//import eventsModule from './events/index.js';

export default makeExecutableSchema({
  typeDefs: [
    users.typeDefs,
    gqltypes.typeDefs,
    categories.typeDefs,
    events.typeDefs,
    comments.typeDefs,
    DateTimeTypeDefinition,
    TimeTypeDefinition,
    DateTypeDefinition
    //eventsModule.typeDefs
  ],
  resolvers: [
    users.resolvers,
    gqltypes.resolvers,
    categories.resolvers,
    events.resolvers,
    comments.resolvers
    //DateTimeResolver,
    //TimeResolver,
    //DateResolver
    //eventsModule.resolvers
  ]
});
