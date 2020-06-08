import "dotenv/config";
import Koa from 'koa';
import GraphQLModule from './modules/main';
import connectDB from './database';
import { server } from "./apolloServer";


connectDB();
const app = new Koa();
app.listen(3000, () => {
  console.log('listening to port 3000');
});
server.applyMiddleware({ app, cors: { origin: process.env.CLIENT_URL, credentials: true } });
