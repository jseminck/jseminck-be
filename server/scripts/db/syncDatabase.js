import getDatabase, { tables } from '../../src/db';
import time from '../../src/util/time';
import getDefinedActivities from '../../data/definedActivities';

syncActivities();

/**
 * Syncs the list of activities with the database.
 *
 * We store the initial list of activities in a JSON file, and we need to insert any activities
 * that are not yet created into the database.
 */
async function syncActivities() {
  const knex = getDatabase();

  await getDefinedActivities().forEach(async (activity) => {
    const { year, month, name } = activity;
    try {
      const existingActivity = await knex.select().table(tables.ACTIVITIES).where({ year, month, name });

      if (existingActivity.length === 0) {
        await knex(tables.ACTIVITIES).insert({ ...activity, updated: time.todayAsString() });
      }
    } catch (error) {
      console.warn(error); // eslint-disable-line no-console
    }
  });
}
