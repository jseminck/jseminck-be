import getDatabase, { tables } from "../db";

export default function setupLogger(app) {
    app.use(async (ctx, next) => {
        const start = Date.now();

        await next();

        const ms = Date.now() - start;

        try {
            const knex = await getDatabase();
            await knex(tables.LOGS).insert(createLog(`${ctx.method} ${ctx.url}`, ms));
        } catch (e) {
            console.warn(e);
        }
    });
};

function createLog(endpoint, duration) {
    return {
        endpoint,
        duration,
        created: new Date()
    };
}