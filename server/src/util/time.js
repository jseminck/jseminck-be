import moment from 'moment';

export default {
  /**
   * Returns the current day as a string in the YYYY-MM-DD format.
   * @returns {String}
   */
  todayAsString() {
    return moment().startOf('day').format('YYYY-MM-DD');
  },

  /**
   * Returns the current month as a number, where January = 1 and December = 12.
   * @returns {Number}
   */
  currentMonth() {
    return moment().month() + 1;
  },

  /**
   * Returns the current year
   * @returns {Number}
   */
  currentYear() {
    return moment().year();
  },
};
