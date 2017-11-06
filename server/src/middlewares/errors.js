import logService from '../components/logs/service';

export default function setupErrorHandler(app) {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      const { status, message } = err;

      logService.createErrorLog(message);
      ctx.status = status || 500;
      ctx.body = message;

      ctx.app.emit('error', err, ctx);
    }
  });
}
