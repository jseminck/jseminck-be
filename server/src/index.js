import createServer from './createServer';

require('babel-polyfill');
require('dotenv').config();

const app = createServer();

app.listen(12345);
console.log('app is listening on: http://localhost:12345'); // eslint-disable-line no-console
