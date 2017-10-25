import logService from "../services/logService";

export default function setupLogger(app) {
    app.use(async (ctx, next) => {
        const start = Date.now();

        await next();

        const duration = Date.now() - start;

        try {
            await logService.createInfoLog(`${ctx.endpoint} - ${duration}ms`);
        } catch (e) {
            console.warn(e);
        }
    });
};

