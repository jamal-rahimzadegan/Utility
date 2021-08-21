/**
 * Simple class for working with localStorage nicely
 */

type SetMultiItemType = { [key: string]: any };

class LS {
  isSupported: boolean;

  constructor() {
    this.isSupported = typeof Storage !== 'undefined';
  }

  get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.log(`--- e in get ----> `, e);
    }
  }

  getMultiple(keys: string[]) {
    try {
      return keys.map((k) => this.get(k));
    } catch (e) {
      console.log(`--- e in get multiple ----> `, e);
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
      console.log(`--- e in get all ----> `, e);
    }
  }

  set(key: string, value: any) {
    try {
      return localStorage.setItem(key, value);
    } catch (e) {
      console.log(`--- e in set ----> `, e);
    }
  }

  setMultiple(items: SetMultiItemType[]) {
    try {
      return items.map((item, i) => {
        Object.entries(item).map(([key, value]) => this.set(key, value));
      });
    } catch (e) {
      console.log(`--- e in set multiple ----> `, e);
    }
  }

  remove(key: string) {
    return localStorage.removeItem(key);
  }

  removeMultiple(keys: string[]) {
    try {
      return keys.map((k) => this.remove(k));
    } catch (e) {
      console.log(`--- e in remove multiple ----> `, e);
    }
  }

  removeAll() {
    try {
      return localStorage.clear();
    } catch (e) {
      console.log(`--- e in clear ----> `, e);
    }
  }
}

export default new LS();
