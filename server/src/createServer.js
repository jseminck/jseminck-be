import Koa from 'koa';
import setupMiddlewares from './middlewares';
import setupRoutes from './routes';
import setupSchedulers from './schedules';

export default function createServer() {
  const app = new Koa();

  setupMiddlewares(app);
  setupRoutes(app);
  setupSchedulers();

  return app;
}
