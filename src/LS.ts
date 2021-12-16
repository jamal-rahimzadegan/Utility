import { ComplexObject } from 'types';
import runBeforeEachMethod from './run-before-each-method';
import generateError from './generate-error';

/**
 * Simple class for working with localStorage nicely
 */

class LS {
  isSupported: boolean;

  constructor() {
    this.isSupported = typeof Storage !== 'undefined';
    runBeforeEachMethod(this, this.checkSupport.bind(this));
  }

  checkSupport() {
    try {
      if (!this.isSupported) generateError('There is no localStorage', 404);
    } catch (e) {
      return e;
    }
  }

  get(key: string, isMultiple?: boolean) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      if (isMultiple) generateError('no localStorage found');
      return { err: e, msg: 'error in getting ' + key };
    }
  }

  getMultiple(keys: string[]) {
    try {
      let items = {};
      let i = keys.length;
      while (i--) items[keys[i]] = this.get(keys[i], true);
      return items;
    } catch (e) {
      return { err: e, msg: 'error in getting multiple' };
    }
  }

  getAll() {
    try {
      let items = {};
      let keys = Object.keys(localStorage);
      let i = keys.length;
      while (i--) items[keys[i]] = this.get(keys[i]);
      return items;
    } catch (e) {
      return { err: e, msg: 'error in getting all' };
    }
  }

  set(key: string, value: any) {
    try {
      return localStorage.setItem(key, value);
    } catch (e) {
      return e;
    }
  }

  setMultiple(items: ComplexObject[]) {
    try {
      return items.map((item, i) => {
        Object.entries(item).map(([key, value]) => this.set(key, value));
      });
    } catch (e) {
      return e;
    }
  }

  remove(key: string) {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      return e;
    }
  }

  removeMultiple(keys: string[]) {
    try {
      return keys.map((k) => this.remove(k));
    } catch (e) {
      return e;
    }
  }

  removeAll() {
    try {
      return localStorage.clear();
    } catch (e) {
      return e;
    }
  }
}

export default new LS();
