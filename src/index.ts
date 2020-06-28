import dotenv from 'dotenv';
import Koa from 'koa';
import connectDB from './database';
import server from './apolloServer';

dotenv.config();

connectDB();
const app = new Koa();
app.keys = process.env.APP_KEYS!.split(' ');
app.listen(3000, () => {
  console.log('🚀 listening to port 3000');
});
server.applyMiddleware({ app, cors: { origin: process.env.CLIENT_URL!, credentials: true } });
