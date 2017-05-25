import {merge} from 'lodash';

export default class {

  options = {};

  constructor(options) {
    this.configure(options);
  }

  configure(options) {
    if (options) {
      this.options = merge(this.options, options);
    }

    return this;
  }
}
