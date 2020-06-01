import { GraphQLModule } from '@graphql-modules/core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
export const UserModule = new GraphQLModule({
  typeDefs,
  resolvers,
});
