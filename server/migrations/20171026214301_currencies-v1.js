exports.up = function (knex) {
  return knex.schema.createTable('currency_rates', (table) => {
    table.increments('id').unsigned().primary();
    table.string('from_currency').notNull();
    table.string('to_currency').notNull();
    table.double('currency_rate').notNull();
    table.dateTime('updated').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('currency_rates');
};
