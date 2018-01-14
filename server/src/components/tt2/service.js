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
};
