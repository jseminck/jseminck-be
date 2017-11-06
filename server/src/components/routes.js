import Router from 'koa-router';
import activitiesRoutes from './activities';
import authenticationRoutes from './authentication';
import awsRoutes from './aws';
import currenciesRoutes from './currencies';
import logsRoutes from './logs';
import pingRoutes from './ping';
import restaurantRoutes from './restaurants';
import stocksRoutes from './stocks';

export default function setupRoutes(app) {
  const router = new Router();

  activitiesRoutes(router);
  authenticationRoutes(router);
  awsRoutes(router);
  currenciesRoutes(router);
  logsRoutes(router);
  pingRoutes(router);
  restaurantRoutes(router);
  stocksRoutes(router);

  app
    .use(router.routes())
    // Makes sure a 405 Method Not Allowed is sent
    .use(router.allowedMethods());
}
