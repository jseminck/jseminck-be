import koaBody from 'koa-body';
const serve = require('koa-static');
import setupCors from './cors';
import setupErrorHandler from './errors';
import setupLogger from './logger';

export default function setupMiddlewares(app) {
  app.use(koaBody{ multipart: true }());
  app.use(serve(path.join(__dirname, '/screenshots')));

  setupErrorHandler(app);
  setupCors(app);
  setupLogger(app);
}
