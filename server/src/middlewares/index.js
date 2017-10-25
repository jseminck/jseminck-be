import setupCors from "./cors";
import setupErrorHandler from "./errors";
import setupLogger from "./logger";

export default function setupMiddlewares(app) {
    setupErrorHandler(app);
    setupCors(app);
    setupLogger(app);
};