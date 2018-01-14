exports.up = function (knex) {
  return knex.schema.alterTable('tt2_commands', (table) => {
    table.boolean('completed');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('tt2_commands', (table) => {
    table.boolean('year');
  });
};
