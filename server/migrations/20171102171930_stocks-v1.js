
exports.up = function (knex) {
  return knex.schema.createTable('stocks', (table) => {
    table.increments('id').unsigned().primary();
    table.string('ticker').notNull();
    table.string('url').notNull();
    table.double('price').notNull();
    table.string('last_update').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('stocks');
};
