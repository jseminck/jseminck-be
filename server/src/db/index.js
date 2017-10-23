import knex from 'knex';
import tables from "./tables";
import knexFile from "../../knexfile.js";

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
        }
        catch (error) {
            console.warn(error);
            reject(error);
        }
    });
};

export {
    tables
};

