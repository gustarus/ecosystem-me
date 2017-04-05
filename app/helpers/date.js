import translate from '@helpers/translate';

export default {

  period(from, till) {
    // calculate begin and end dates
    let begin = moment(from, translate.format.date);
    let end = till ? moment(till, translate.format.date) : moment();

    // calculate months diff
    let months = end.add(1, 'd').diff(begin, 'months');

    return {begin, end, months};
  }
}
