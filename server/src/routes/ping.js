export default function pingRoutes(router) {
  router.get('/ping', getPing);
}

function getPing(ctx) {
  ctx.status = 200;
  ctx.body = {
    appName: 'myAppName',
  };
}
