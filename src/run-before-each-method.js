/**
 Helper to call a function before each class method
 use it like below in the constructor: runBeforeEachMethod(this, this.METHOD_TO_CALL.bind(this));
 @requires class and a callback fn
 @returns a proxy
 */

export default function runBeforeEachMethod(targetClass, cb) {
  return new Proxy(targetClass, {
    get(targetClass, property) {
      if (typeof targetClass[property] === 'function') {
        return function (...args) {
          cb?.(property);
          targetClass[property].apply(targetClass, args);
        };
      } else return targetClass[property];
    },
  });
}
