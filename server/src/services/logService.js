import getDatabase, { tables } from '../db';

const logTypes = {
  INFO: 'info',
  ERROR: 'error',
};

export default {
  async createInfoLog(message) {
    return save(createLogItem(message, logTypes.INFO));
  },

  async createErrorLog(message) {
    return save(createLogItem(message, logTypes.ERROR));
  },
};

function createLogItem(message, type) {
  return {
    message,
    type,
    created: new Date(),
  };
}

async function save(logItem) {
  const knex = await getDatabase();
  await knex(tables.LOGS).insert(logItem);
}
