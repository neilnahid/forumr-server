import { ApolloServer } from 'apollo-server-koa';
import module from './modules/main';

const server = new ApolloServer({
  schema: module.schema,
  typeDefs: module.typeDefs,
  context: ({ ctx }) => ({ ctx }),
});

export default server;
