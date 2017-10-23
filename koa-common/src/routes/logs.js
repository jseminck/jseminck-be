import getDatabase, { tables }  from "../db";

export default function logsRoutes(router) {
    router.get('/logs', getLogs);
};

async function getLogs(ctx) {
    const knex = await getDatabase();
    const logs = await knex.select().table(tables.LOGS);

    ctx.status = 200;
    ctx.body = {
        logs
    };
}