import { promisify } from 'util';
import xray from 'x-ray';
import time from '../../util/time';
import currencyRatesService from '../../services/currencyRatesService';
import getCurrencies from './currencies';

export default function scrapeXe() {
  const x = xray();

  return Promise.all(getCurrencies().map(async (currency) => {
    const toCurrency = currency.code;
    const currencyRate = await scrapeCurrencyRate(x, 'USD', toCurrency);

    await currencyRatesService.save({
      fromCurrency: 'USD',
      toCurrency,
      currencyRate,
      updated: time.todayAsString(),
    });

    return {
      fromCurrency: 'USD',
      toCurrency,
      currencyRate,
    };
  }));
}

async function scrapeCurrencyRate(x, fromCurrency, toCurrency) {
  const url = createXeUrl(fromCurrency, toCurrency);
  const getCurrencyRate = promisify(x(url, '.uccResultAmount'));
  const currencyRate = await getCurrencyRate();

  console.log(`${fromCurrency} -> ${toCurrency}: ${currencyRate}`);

  return Number(currencyRate.replace(',', ''));
}

function createXeUrl(fromCurrency, toCurrency) {
  return `http://www.xe.com/currencyconverter/convert/?Amount=1&From=${fromCurrency}&To=${toCurrency}`;
}

