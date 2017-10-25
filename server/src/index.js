require("babel-polyfill");
require('dotenv').config();

import createServer from "./createServer";

const app = createServer();

app.listen(12345);
console.log("app is listening on: http://localhost:12345");