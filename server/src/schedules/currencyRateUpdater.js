import { getCurrencies } from '../routes/currencies';

export default async function currencyRateUpdater() {
  console.log('Scheduler: updating currency rates'); // eslint-disable-line no-console

  // Not sure if this is a great idea... but basically we call the handler function
  // for the "get /currencies" request, with an empty context.
  await getCurrencies({});
}
