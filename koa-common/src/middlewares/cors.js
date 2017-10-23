import cors from "koa-cors";

export default function setupCors(app) {
    app.use(cors());
}