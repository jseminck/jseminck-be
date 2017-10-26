exports.up = function (knex) {
  return knex.schema.createTable('log', (table) => {
    table.increments('id').unsigned().primary();
    table.string('endpoint').notNull();
    table.integer('duration').notNull();
    table.dateTime('created').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('log');
};
