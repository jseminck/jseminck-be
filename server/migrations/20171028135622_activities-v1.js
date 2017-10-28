
exports.up = function (knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id').unsigned().primary();
    table.integer('duration').notNull();
    table.string('month').notNull();
    table.integer('count').notNull();
    table.string('last_update').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('activities');
};
