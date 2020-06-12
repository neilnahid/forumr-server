import { GraphQLModule } from '@graphql-modules/core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import UserModule from '../user/user';

export default new GraphQLModule({
  typeDefs,
  resolvers,
  imports: [UserModule],
  context: (ctx) => ctx
  ,
});
