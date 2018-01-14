import tt2Service from './service';

export default function tt2Routes(router) {
  router
    .get('/tt2/stage', getStage)
    .get('/tt2/log', getLogs)
    .post('/tt2/log', createLogEntry)
    .get('/tt2/commands', getLatestCommands)
    .post('/tt2/commands', createCommand);
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

export async function createLogEntry(ctx) {
  const { request: { body } } = ctx;
  const { type, message } = body;
  await tt2Service.createLog({ type, message });
  ctx.status = 200;
  ctx.body = { type, message };
}

export async function getLatestCommands(ctx) {
  const logs = await tt2Service.getLatestCommands();
  ctx.status = 200;
  ctx.body = logs;
}

export async function createCommand(ctx) {
  const { request: { body } } = ctx;
  const { command } = body;
  await tt2Service.createCommand({ command });
  ctx.status = 200;
  ctx.body = { command };
}
