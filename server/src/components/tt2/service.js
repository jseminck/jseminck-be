import getDatabase, { tables } from '../../db';

export default {
  async findByType(type) {
    const knex = await getDatabase();

    return knex
      .select()
      .table(tables.TT2_LOGS)
      .where({ type })
      .orderByRaw('time DESC')
      .limit(5);
  },

  async createLog(logEntry) {
    const knex = await getDatabase();
    await knex(tables.TT2_LOGS).insert({
      ...logEntry,
      time: new Date(),
    });
  },

  async findLatestLogs() {
    const knex = await getDatabase();

    return knex
      .select()
      .table(tables.TT2_LOGS)
      .orderByRaw('time DESC')
      .limit(20);
  },

  async createCommand(command) {
    const knex = await getDatabase();
    await knex(tables.TT2_COMMANDS).insert({
      ...command,
      completed: false,
      time: new Date(),
    });
  },

  async findLatestCommands() {
    const knex = await getDatabase();

    const commands = await knex
      .select()
      .table(tables.TT2_COMMANDS)
      .where({ completed: false })
      .orderByRaw('time DESC')
      .limit(20);

    commands.forEach((command) => {
      knex(tables.TT2_COMMANDS)
        .where({ id: command.id })
        .update({
          completed: true,
        });
    });

    return commands;
  },
};
