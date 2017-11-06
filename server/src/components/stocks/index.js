import scrapeGoogleFinance from './scrapeGoogleFinance';

export default function stocksRoutes(router) {
  router.get('/stocks', getStocks);
}

export async function getStocks(ctx) {
  const stockPrice = await scrapeGoogleFinance();
  ctx.status = 200;
  ctx.body = stockPrice;
}
