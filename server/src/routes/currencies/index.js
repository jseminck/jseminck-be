import scrapeXe from './scrapeXe';

export default function currenciesRoutes(router) {
  router.get('/currencies', getCurrencies);
}

async function getCurrencies(ctx) {
  const currencyRates = await scrapeXe();

  ctx.status = 200;
  ctx.body = currencyRates;
}
