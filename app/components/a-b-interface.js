import Base from './base.js';

export default class extends Base {

  variants = {};
  used = {};
  hited = {};

  boot() {
    const app = this.app;
    const {prefix, tests} = this.options;
    Object.keys(tests).forEach(section => {
      const variants = tests[section];

      const cookie = `${prefix}:${section}`;
      let key = app.cookies.get(cookie);
      if (!variants[key]) {
        const keys = Object.keys(variants);
        key = keys[Math.floor(Math.random() * keys.length)];
        app.cookies.set(cookie, key);
      }

      const params = variants[key];
      this.variants[section] = { id: `${section}-${key}`, section, key, params };
    });
  }

  use(section, force = false) {
    const variant = this.variants[section];
    if (!force && this.used[section]) {
      return variant;
    }

    if (variant) {
      console.info(`[a-b-interface] Using variant '${variant.key}' from section '${section}'.`);
      this.report(section, variant.key, 'use');
      this.used[section] = variant.key;
      return { variant, hit: () => this.hit(section, variant.key) };
    }

    return null;
  }

  hit(section, key = null, force = false) {
    if (!key) {
      if (!this.used[section]) {
        throw new Error(`Unable to find used variant via section '${section}. Please, pass variant key which u want to hit.`);
      }

      key = this.used[section];
    }

    if (!force && this.hited[section] === key) {
      return this;
    }

    console.info(`[a-b-interface] Hitting variant '${key}' from section '${section}'.`);
    this.report(section, key, 'hit');
    this.hited[section] = key;
    return this;
  }

  report(section, key, action) {
    const {tests} = this.options;
    if (!tests[section][key]) {
      throw new Error(`Unable to hit variant for '${section}' and '${key}': can't find it.`);
    }

    const actions = ['use', 'hit'];
    if (!action || !actions.includes(action)) {
      throw new Error(`Please, pass a valid action identifier (${actions.join(', ')})`);
    }

    analytics('send', 'event', 'ab-test', action, `${section}:${key}`);
    return this;
  }
};
