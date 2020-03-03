import fs from 'fs';
import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schemaSource          = fs.readFileSync('src/app/graphql/schema.graphql').toString('UTF8');
export const GRAPHQL_SCHEMA = buildSchema(schemaSource);
