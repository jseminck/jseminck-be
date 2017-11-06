import { promisify } from 'util';
import xray from 'x-ray';

export default async function scrapeGoogleFinance() {
  const x = xray();

  const url = createGoogleFinanceUrl('SPY');
  const getStockPrice = promisify(x(url, '#ref_700145_l'));
  const stockPrice = await getStockPrice();

  return Number(stockPrice);
}

function createGoogleFinanceUrl(ticker) {
  return `https://finance.google.com/finance?q=${ticker}`;
}

