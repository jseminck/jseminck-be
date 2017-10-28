import activitiesService from '../../services/activitiesService';
import time from '../../util/time';

export default function activitiesRoutes(router) {
  router.get('/activities', getActivities);
}

export async function getActivities(ctx) {
  const activities = await getActivitiesForCurrentYearAndMonth();

  ctx.status = 200;
  ctx.body = activities;
}

async function getActivitiesForCurrentYearAndMonth() {
  return activitiesService.findAll(time.currentYear(), time.currentMonth());
}
