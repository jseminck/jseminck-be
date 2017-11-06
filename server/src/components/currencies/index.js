import currencyRatesService from './service';
import scrapeXe from './scrapeXe';
import time from '../../util/time';

export default function currenciesRoutes(router) {
  router.get('/currencies', getCurrencies);
}

export async function getCurrencies(ctx) {
  const currencyRates = await getCurrencyRatesForToday();

  ctx.status = 200;
  ctx.body = currencyRates;
}

async function getCurrencyRatesForToday() {
  const existingCurrencyRates = await currencyRatesService.findAll(time.todayAsString());
  return existingCurrencyRates.length > 0 ? existingCurrencyRates : scrapeXe();
}
