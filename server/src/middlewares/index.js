import koaBody from 'koa-body';
import setupCors from './cors';
import setupErrorHandler from './errors';
import setupLogger from './logger';

export default function setupMiddlewares(app) {
  app.use(koaBody());

  setupErrorHandler(app);
  setupCors(app);
  setupLogger(app);
}
