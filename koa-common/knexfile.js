// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'pguser',
        password: 'pguser',
        database: 'pgdb'
    },
    pool: { min: 0, max: 10 },
    migrations: {
        tableName: 'migrations'
    }
  }
};
