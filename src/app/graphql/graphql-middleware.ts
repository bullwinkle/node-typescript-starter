import graphqlHTTP from 'express-graphql';

import { GRAPHQL_ROOT } from './graphql-resolvers';
import { GRAPHQL_SCHEMA } from './graphql-schema';

export function graphqlMiddleware () {
  return graphqlHTTP({
    schema: GRAPHQL_SCHEMA,
    rootValue: GRAPHQL_ROOT,
    graphiql: true,
  });
}
