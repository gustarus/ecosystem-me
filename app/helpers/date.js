import translate from '@core/helpers/translate';

export default {

  period(from, till) {
    // calculate begin and end dates
    const begin = moment(from, translate.format.date);
    const end = till ? moment(till, translate.format.date) : moment();

    // calculate months diff
    const months = end.add(1, 'd').diff(begin, 'months');

    return {begin, end, months};
  }
}
