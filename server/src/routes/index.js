import Router from 'koa-router';
import awsRoutes from './aws';
import logsRoutes from './logs';
import pingRoutes from './ping';
import restaurantRoutes from './restaurants';

export default function setupRoutes(app) {
  const router = new Router();

  awsRoutes(router);
  logsRoutes(router);
  pingRoutes(router);
  restaurantRoutes(router);

  app
    .use(router.routes())
  // Makes sure a 405 Method Not Allowed is sent
    .use(router.allowedMethods());
}
