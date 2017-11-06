import mailService from '../services/mailService';
import { getAwsInstances } from '../components/aws';

export default async function checkAwsInstances() {
  console.log('Scheduler: checking AWS instances'); // eslint-disable-line no-console

  // Not sure if this is a great idea... but basically we call the handler function
  // for the "get /currencies" request, with an empty context.
  const ctx = {};
  await getAwsInstances(ctx);
  const { body: instances } = ctx;

  instances.forEach((instance) => {
    if (instance.state === 'running') {
      mailService.sendMail(
        'joachim@seminck.be',
        'AWS Instance is running',
        `Instance with name ${instance.name} is still running. Maybe we should turn it off?`,
      );
    }
  });
}
