import _ from 'lodash';
import AWS from 'aws-sdk';

export default function awsRoutes(router) {
  router
    .get('/aws', getAwsInstances)
    .post('/aws/:instanceId/start', startAwsInstance)
    .post('/aws/:instanceId/stop', stopAwsInstance);
}

export async function getAwsInstances(ctx) {
  const aws = getAws();
  const awsRequest = aws.describeInstances();
  const awsResponse = await awsRequest.promise();
  const instances = extractInstancesFromAwsResponse(awsResponse);

  ctx.status = 200;
  ctx.body = instances;
}

async function startAwsInstance(ctx) {
  const { instanceId } = ctx.params;
  const aws = getAws();
  const awsRequest = aws.startInstances({ InstanceIds: [instanceId] });
  await awsRequest.promise();

  ctx.status = 200;
}

async function stopAwsInstance(ctx) {
  const { instanceId } = ctx.params;
  const aws = getAws();
  const awsRequest = aws.stopInstances({ InstanceIds: [instanceId] });
  await awsRequest.promise();

  ctx.status = 200;
}

function getAws() {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'eu-central-1',
  });

  return new AWS.EC2();
}

function extractInstancesFromAwsResponse(awsResponse) {
  return _.flatMap(awsResponse.Reservations, (reservation) => {
    return _.map(reservation.Instances, (instance) => {
      return {
        id: instance.InstanceId,
        name: _(instance.Tags).filter(tag => tag.Key === 'Name').first().Value,
        state: instance.State.Name,
      };
    });
  });
}
