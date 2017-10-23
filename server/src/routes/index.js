import Router from "koa-router";
import pingRoutes from "./ping";
import logsRoutes from "./logs";

export default function setupRoutes(app) {
    const router = new Router();

    pingRoutes(router);
    logsRoutes(router);

    app
        .use(router.routes())
        // Makes sure a 405 Method Not Allowed is sent
        .use(router.allowedMethods());
};