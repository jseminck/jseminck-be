import Koa from 'koa';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';

export default function createServer() {
  const app = new Koa();

  setupMiddlewares(app);
  setupRoutes(app);

  return app;
}
