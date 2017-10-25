
exports.up = function(knex) {
  return knex.schema.alterTable('logs', (table) => {
    table.string('type').notNull().defaultTo("");
    table.string('message').notNull().defaultTo("");
    table.dropColumn('endpoint');
    table.dropColumn('duration');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('logs', (table) => {
    table.dropColumn('type');
    table.dropColumn('message');
    table.string('endpoint').notNull();
    table.integer('duration').notNull();
  });
};
