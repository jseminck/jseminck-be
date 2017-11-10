// import getDatabase, { tables } from '../../src/db';
import bcrypt from 'bcrypt';

createAdminUser();

/**
 * Clears all the data in the database
 */
async function createAdminUser() {
  const saltRounds = 5;
  const hashedPassword = await bcrypt.hash('myPassword', saltRounds);
  console.log(hashedPassword);
  const match = await bcrypt.compare('myPassword', hashedPassword);
  console.log(match);
}
