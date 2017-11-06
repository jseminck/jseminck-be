import logService from './service';

export default function logsRoutes(router) {
  router.get('/logs', getLogs);
}

async function getLogs(ctx) {
  const { type } = ctx.query;

  const logs = await logService.findAll({ type });

  ctx.status = 200;
  ctx.body = {
    data: logs,
  };
}
