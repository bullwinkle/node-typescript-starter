import express from 'express';
import { Server } from 'http';

import { graphqlMiddleware } from './graphql/graphql-middleware';
import { createLogger } from './utils/logger';

export class App {
  app = express();
  log = createLogger('app');

  server?: Server;

  start (): void {
    this.log('start!');

    this.app.use('/graphql', graphqlMiddleware());

    this.server = this.app.listen(4000);

    const addressInfo = this.server.address();
    const address     = !addressInfo || typeof addressInfo === 'string' ? addressInfo
      : (({ port }) => `http://0.0.0.0:${port}/graphql`)(addressInfo);

    this.log(`Running a GraphQL API server at ${address}`);
  }
}
