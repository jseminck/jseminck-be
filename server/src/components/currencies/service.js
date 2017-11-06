import getDatabase, { tables } from '../../db';

export default {
  async findAll(updated) {
    const knex = await getDatabase();

    return knex(tables.CURRENCY_RATES).select(
      'from_currency as fromCurrency',
      'to_currency as toCurrency',
      'currency_rate as currencyRate',
      'updated',
    ).where({ updated });
  },

  async save({
    fromCurrency, toCurrency, currencyRate, updated,
  }) {
    const knex = await getDatabase();
    await knex(tables.CURRENCY_RATES).insert({
      from_currency: fromCurrency,
      to_currency: toCurrency,
      currency_rate: currencyRate,
      updated,
    });
  },
};
