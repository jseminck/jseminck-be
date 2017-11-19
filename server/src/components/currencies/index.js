import currencyRatesService from './service';
import time from '../../util/time';

export default function currenciesRoutes(router) {
  router.get('/currencies', getCurrencies);
}

export async function getCurrencies(ctx) {
  const currencyRates = await currencyRatesService.findAll(time.todayAsString());

  ctx.status = 200;
  ctx.body = currencyRates;
}
