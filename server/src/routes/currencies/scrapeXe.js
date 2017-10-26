import xray from 'x-ray';
import { promisify } from 'util';
import getCurrencies from './currencies';

export default function scrapeXe() {
  const x = xray();

  return Promise.all(getCurrencies().map(async (currency) => {
    return {
      fromCurrency: 'USD',
      toCurrency: currency.code,
      currencyRate: await scrapeCurrencyRate(x, 'USD', currency.code),
    };
  }));
}

async function scrapeCurrencyRate(x, fromCurrency, toCurrency) {
  const url = createXeUrl(fromCurrency, toCurrency);
  const getCurrencyRate = promisify(x(url, '.uccResultAmount'));
  const currencyRate = await getCurrencyRate();

  console.log(`${fromCurrency} -> ${toCurrency}: ${currencyRate}`);

  return currencyRate;
}

function createXeUrl(fromCurrency, toCurrency) {
  return `http://www.xe.com/currencyconverter/convert/?Amount=1&From=${fromCurrency}&To=${toCurrency}`;
}

