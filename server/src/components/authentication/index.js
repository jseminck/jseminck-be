import jwt from 'jsonwebtoken';

export default function awsRoutes(router) {
  router
    .post('/login', login)
    .get('/login', verifyToken);
}

const SECRET_KEY = 'shhhhh';

function login(ctx) {
  const { request: { body } } = ctx;
  console.log(body);
  const { username, password } = JSON.parse(body);
  console.log(username, password);

  if (!username || !password) {
    ctx.status = 500;
    ctx.body = 'Missing username and/or password in body';
    return;
  }

  if (username !== 'admin' || password !== 'admin') {
    ctx.status = 401;
    ctx.body = 'Incorrect username and/or password';
    return;
  }

  ctx.status = 200;
  ctx.body = jwt.sign({ foo: 'bar' }, SECRET_KEY);
}

function verifyToken(ctx) {
  const { token } = ctx.query;

  if (!token) {
    ctx.status = 500;
    ctx.body = 'Provide token as query parameter';
    return;
  }

  try {
    jwt.verify(token, SECRET_KEY);
  } catch (e) {
    ctx.status = 401;
    ctx.body = 'Invalid token';
  }

  ctx.status = 200;
}
