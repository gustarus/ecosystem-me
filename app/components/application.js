import {each, merge} from 'lodash';
import Base from './base';

/**
 * Core application model.
 * @class application
 * @property components {Object} Registered application components.
 * @property modules {Object} Registered application modules.
 * @property options {Object} Application configuration.
 */
export default class extends Base {

  components = {};
  modules = {};

  setup() {
    const {components, modules} = this.options;
    components && this.setupUnits(components, this.registerComponent);
    modules && this.setupUnits(modules, this.registerModule);
    return this;
  }

  boot() {
    const {components, modules} = this;
    components && this.bootUnits(components);
    modules && this.bootUnits(modules);
    return this;
  }

  setupUnits(units, method) {
    each(units, (options, name) => {
      method.call(this, name, options);
    });
  }

  bootUnits(units) {
    each(units, unit => {
      if (!unit._booted) {
        unit.boot && unit.boot();
        unit._booted = true;
      }
    });
  }

  registerComponent(name, options) {
    const alias = options.alias;
    const Component = options.constructor;
    delete options.alias;
    delete options.constructor;
    this.components[name] = new Component(options);
    this.components[name].app = this;

    if (alias) {
      if (!this[name]) {
        this[name] = this.components[name];
      } else {
        this.trace(`Can\'t override application property with component ${name}.`, 'error');
      }
    }
  }

  registerModule(name, options) {
    const Module = options.constructor;
    delete options.constructor;
    this.modules[name] = new Module(options);
    this.modules[name].app = this;
  }

  render(router, target) {
    ReactDOM.render(router, target);
  }

  trace(message, type = 'log') {
    console[type](`[app] ${message}`);
  }
}
