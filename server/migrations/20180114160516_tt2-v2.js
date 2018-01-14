exports.up = function(knex) {
  return knex.schema.createTable("tt2_commands", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("command").notNull();
    table.string("time").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tt2_commands");
};
