
exports.up = function(knex) {
  return knex.schema.renameTable('log', 'logs');
};

exports.down = function(knex) {
  return knex.schema.renameTable('logs', 'log');
};
