import schedule from 'node-schedule';
import currencyRateUpdater from './currencyRateUpdater';

// const EVERY_MINUTE = '* * * * *';
const AT_2_AM = '0 2 * * *';

export default function setupSchedulers() {
  schedule.scheduleJob(AT_2_AM, currencyRateUpdater);
}
