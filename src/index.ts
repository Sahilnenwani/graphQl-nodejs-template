import * as dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers  from './graphql/resolver';
import typeDefs from './graphql/graphql-schema';
import Mongo from './data-config/database-connection';

const main = async () => {
    const apolloServer = new ApolloServer({
    //   schema: await buildSchema({
    //     resolvers:[TaskResolver,UserResolver],
    //     // typeDefs,
    //     validate: false,
    //   }),
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });

    await Mongo().connect();

    await apolloServer.start();
    const app: Express = express();

  
    apolloServer.applyMiddleware({ app, path:'/api' });
  
    app.get("/", (_req, res) => res.send("hello world"));
  
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  };
  
  main().catch((err) => console.error(err));