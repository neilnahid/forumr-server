import { ApolloServer } from "apollo-server-koa";
import module from "./modules/main";
export const server = new ApolloServer({
  schema: module.schema,
  typeDefs: module.typeDefs,
  context: ({ ctx }) => ({ ctx }),
});