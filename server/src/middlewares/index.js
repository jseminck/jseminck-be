import setupCors from './cors';
import setupErrorHandler from './errors';
import setupLogger from './logger';
import koaBody from 'koa-body';

const path = require('path');
const serve = require('koa-static');

export default function setupMiddlewares(app) {
  app.use(koaBody({ multipart: true }));
  app.use(serve(path.join(__dirname, '/../../screenshots')));

  setupErrorHandler(app);
  setupCors(app);
  setupLogger(app);
}
