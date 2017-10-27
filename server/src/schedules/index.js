import schedule from 'node-schedule';
import currencyRateUpdater from './currencyRateUpdater';

const EVERY_MINUTE = '* * * * *';

export default function setupSchedulers() {
  schedule.scheduleJob(EVERY_MINUTE, currencyRateUpdater);
}
