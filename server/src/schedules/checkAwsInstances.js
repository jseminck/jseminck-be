import mailService from '../services/mailService';
import { getAwsInstances } from '../routes/aws';

export default async function checkAwsInstances() {
  console.log('Scheduler: checking AWS instances'); // eslint-disable-line no-console

  mailService.sendMail('joachim@seminck.be', 'test');

  // Not sure if this is a great idea... but basically we call the handler function
  // for the "get /currencies" request, with an empty context.
  const ctx = {};
  await getAwsInstances(ctx);

  console.log('ctx', ctx);
}
