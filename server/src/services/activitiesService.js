import getDatabase, { tables } from '../db';

export default {
  async findAll(year, month) {
    const knex = await getDatabase();
    return knex.select().table(tables.ACTIVITIES).where({ year, month });
  },
};
