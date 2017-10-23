"use strict";

module.exports = function pingRoutes(router) {
    router.get('/ping', function (ctx) {
        ctx.status = 200;
        ctx.body = {
            appName: "myAppName"
        };
    });
};