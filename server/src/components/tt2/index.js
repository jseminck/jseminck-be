import tt2Service from './service';

export default function tt2Routes(router) {
  router
    .get('/tt2/stage', getStage)
    .get('/tt2/log', getLogs)
    .post('/tt2/log', createLogEntry);
}

export async function createLogEntry(ctx) {
  const { request: { body } } = ctx;
  const { type, message } = body;
  await tt2Service.createLog({ type, message });
  ctx.status = 200;
  ctx.body = { type, message };
}

export async function getStage(ctx) {
  const stageEntries = await tt2Service.findByType('STAGE');
  ctx.status = 200;
  ctx.body = stageEntries;
}

export async function getLogs(ctx) {
  const logs = await tt2Service.findLatestLogs();
  ctx.status = 200;
  ctx.body = logs;
}
