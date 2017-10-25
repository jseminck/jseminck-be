import knex from 'knex';
import tables from './tables';
import knexFile from '../../knexfile';

let database;

export default function getDatabase() {
  return new Promise(async (resolve, reject) => {
    try {
      if (database) {
        resolve(database);
        return;
      }

      database = knex(knexFile.development);
      resolve(database);
    } catch (error) {
      console.warn(error); // eslint-disable-line no-console
      reject(error);
    }
  });
}

export {
  tables,
};

