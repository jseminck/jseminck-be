import getDatabase, { tables } from '../db';

const logTypes = {
  INFO: 'info',
  ERROR: 'error',
};

export default {
  async createInfoLog(message) {
    const logItem = {
      message,
      type: logTypes.INFO,
      created: new Date(),
    };

    return save(logItem);
  },
};

async function save(logItem) {
  const knex = await getDatabase();
  await knex(tables.LOGS).insert(logItem);
}
