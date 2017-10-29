import getDatabase, { tables } from '../../src/db';

clearDatabase();

/**
 * Clears all the data in the database
 */
async function clearDatabase() {
  const knex = await getDatabase();
  Object.values(tables).forEach(async (tableName) => {
    const count = await knex(tableName).delete();
    console.log(`Deleted ${count} rows from table ${tableName}`); // eslint-disable-line no-console
  });
}
