
exports.up = function (knex) {
  return knex.schema.alterTable('activities', (table) => {
    table.string('name').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('activities', (table) => {
    table.dropColumn('name');
  });
};
