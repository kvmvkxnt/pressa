// libraries and utilities
import cors from 'cors';
import express from 'express';
import path from 'path';
import url from 'url';

// settings
import { developmentConfig, productionConfig } from './config/index.js';
// routes
import apiRoutes from './routes/api.routes.js';
// error handler
import onError from './utils/onError.js';
// terminal colors
import { FgGreen, FgYellow, Reset } from './utils/colors.js';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import schema from './modules/index.js';

// path to current directory
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// determine mode
const isProduction = process.env.NODE_ENV === 'production';

// selecting settings
type Config = {
  port: number,
  allowedOrigin: string
}

let config: Config;
if (isProduction) {
  config = productionConfig;
} else {
  config = developmentConfig;
}

console.log(config, isProduction, process.env);
console.log(`${FgYellow}%s${Reset}`, 'ℹ️  Configuration info');
console.log(`${FgYellow}%s${Reset}`, `ℹ️  Port: ${config.port}`);
console.log(`${FgYellow}%s${Reset}`, `ℹ️  allowedOrigin: ${config.allowedOrigin}`);

async function startApolloServer() {
  // creating app
  const app = express();
  // setting security related headers
  //app.use(helmet());
  // setting CORS related headers
  app.use(cors()); //{ origin: config.allowedOrigin }
  // transforming request body into JSON format
  app.use(express.json());
  // parsing query string parameters
  app.use(express.urlencoded({ extended: true }));
  // if server is running in production,
  // the client assembly is served as a directory with static files
  if (isProduction) {
    console.log(path.join(__dirname, '../../client/build'))
    app.use(express.static(path.join(__dirname, '../../client/build')));
  }

  app.use(express.static(path.join(__dirname, '../uploads')));

  // routes
  app.use('/api', apiRoutes);
  // route not found
  //app.use('*', (_req: any, _res: any, next) => {
  //  next(new NotFoundError(404, 'Page not found'));
  //});

  // error handler
  app.use(onError);

  const httpServer = createServer(app);

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      return req.headers?.token;
    },
    introspection: true,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      //ApolloServerPluginLandingPageGraphQLPlayground()
      ApolloServerPluginLandingPageLocalDefault()
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: config.port }, resolve));
  console.log(`${FgGreen}%s${Reset}`, `🚀 Server ready to handle requests at http://localhost:${config.port}${server.graphqlPath}`);
}

startApolloServer();
