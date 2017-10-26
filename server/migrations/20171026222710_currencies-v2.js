exports.up = function (knex) {
  return knex.schema.alterTable('currency_rates', (table) => {
    table.dropColumn('updated');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('currency_rates', (table) => {
    table.dateTime('updated').notNull();
  });
};
