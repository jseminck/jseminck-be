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
      .whereNot('type', 'STAGE')
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

  async findCompletedLatestCommands() {
    const knex = await getDatabase();

    return await knex
      .select()
      .table(tables.TT2_COMMANDS)
      .where({ completed: false })
      .orderByRaw('time ASC')
      .limit(20);
  },

  async findAllLatestCommands() {
    const knex = await getDatabase();

    return knex
      .select()
      .table(tables.TT2_COMMANDS)
      .orderByRaw('time DESC')
      .limit(20);
  },

  async markCommandAsCompleted(commandId) {
    const knex = await getDatabase();

    return knex(tables.TT2_COMMANDS)
      .where({ id: commandId })
      .update({
        completed: true,
      });
  },
};
