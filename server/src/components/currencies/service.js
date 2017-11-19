import fetch from 'node-fetch';
import getDatabase, { tables } from '../../db';
import time from '../../util/time';
import getCurrencies from './currencies';

export default {
  async findAll(updated) {
    const knex = await getDatabase();

    const results = await knex(tables.CURRENCY_RATES).select(
      'from_currency as fromCurrency',
      'to_currency as toCurrency',
      'currency_rate as currencyRate',
      'updated',
    ).where({ updated });

    if (results.length === 0) {
      this._fetchFromCurrencyLayer();
      return this.findAll(updated);
    }

    return results;
  },

  // Loads the data from the API
  async _fetchFromCurrencyLayer() {
    const currencies = getCurrencies().reduce((string, currency) => string + currency.code + ',', ''); // eslint-disable-line prefer-template

    const response = await fetch(`http://apilayer.net/api/live?access_key=d84d3b18fe9a143cb6c8dbbf3d111a19&currencies=${currencies}&format=1`);
    const json = await response.json();

    Object.keys(json.quotes).forEach(async (currencyKeyPair) => {
      const fromCurrency = currencyKeyPair.substring(0, 3);
      const toCurrency = currencyKeyPair.substring(3);
      const currencyRate = json.quotes[currencyKeyPair];

      await this.save({
        fromCurrency,
        toCurrency,
        currencyRate,
        updated: time.todayAsString(),
      });
    });
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
