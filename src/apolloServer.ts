import { ApolloServer } from 'apollo-server-koa';
import user from './modules/user/user';
import profile from './modules/profile/profile';
import auth from './modules/authentication/auth';

const server = new ApolloServer({
  modules: [
    user as any,
    profile as any,
    auth as any,
  ],
  context: ({ ctx }) => ({ ctx }),
});

export default server;
