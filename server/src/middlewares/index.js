import setupCors from "./cors";
import setupLogger from "./logger";

export default function setupMiddlewares(app) {
    setupCors(app);
    setupLogger(app);
};