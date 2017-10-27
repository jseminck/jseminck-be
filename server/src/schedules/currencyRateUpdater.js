import { getCurrencies } from '../routes/currencies';

export default function currencyRateUpdater() {
  // Not sure if this is a great idea... but basically we call the handler function
  // for the "get /currencies" request, with an empty context.
  getCurrencies({});
}
