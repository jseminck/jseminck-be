
exports.up = function (knex) {
  return knex.schema.alterTable('activities', (table) => {
    table.integer('year').notNull();
    table.dropColumn('duration');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('activities', (table) => {
    table.integer('duration').notNull();
    table.dropColumn('year');
  });
};
