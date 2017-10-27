import knex from 'knex';
import tables from './tables';
import knexFile from '../../knexfile';

let database;

export default function getDatabase() {
  if (database) {
    return database;
  }

  database = knex(knexFile.development);
  return database;
}

export {
  tables,
};

