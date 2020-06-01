import Koa from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';
import GraphQLModule from './modules/main';
import DB from './database';
const server = new ApolloServer({
  schema: GraphQLModule.schema,
  typeDefs: GraphQLModule.typeDefs,
});

DB();
const app = new Koa();

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('listening to port 3000');
});
