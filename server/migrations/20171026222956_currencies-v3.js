exports.up = function (knex) {
  return knex.schema.alterTable('currency_rates', (table) => {
    table.string('updated').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('currency_rates', (table) => {
    table.dropColumn('updated');
  });
};
