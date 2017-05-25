import date from '@core/helpers/date'

let module = {

  configure(options) {
    this.language = options.language;
    this.format = options.format;
    this.messages = options.messages;
  },

  translate (category, message) {
    return _.get(this.messages, [this.language, category, message], message);
  },

  asYears(count) {
    return count === 1 ? 'year' : 'years';
  },

  asMonths(count) {
    return count === 1 ? 'month' : 'months';
  },

  asPeriod(from, till) {
    const period = date.period(from, till);
    const diff = moment.duration(period.months, 'months');

    const _from = period.begin.format(this.format.dateMonth);
    const _till = till ? period.end.format(this.format.dateMonth) : 'till now';
    const _duration = this.asDuration(diff);

    return `${_from}${_till ? ' - ' + _till : ''}${_duration ? ', ' + _duration : ''}`;
  },

  asDuration(duration) {
    let text = '';

    if (duration.years()) {
      text += duration.years() + ' ' + this.asYears(duration.years());
    }

    if (duration.months()) {
      text += (text ? ' ' : '' ) + duration.months() + ' ' + this.asMonths(duration.months());
    }

    return text;
  },

  asDate(inDate) {
    return moment(inDate, this.format.date).format(this.format.dateDay);
  }
};

module.t = module.translate;

export default module;
