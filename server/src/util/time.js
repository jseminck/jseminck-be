import moment from 'moment';

export default {
  todayAsString() {
    return moment().startOf('day').format('YYYY-MM-DD');
  },
};
