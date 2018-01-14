exports.up = function (knex) {
  return knex.schema.createTable('tt2_log', (table) => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('type').notNull();
    table.string('message').notNull();
    table.string('time').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tt2_log');
};
