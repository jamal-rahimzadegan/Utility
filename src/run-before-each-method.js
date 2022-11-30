/**
 Utility to call a function before each class method (working with getters and setters)
 Use it like thi in the constructor --> return runBeforeEachMethod(this, this.[METHOD_TO_CALL].bind(this));
 @requires a Class and a Callback fn
 @returns a Proxy
 */

export default function runBeforeEachMethod(targetClass, cb) {
  const get = (targetClass, property) => {
    const isCallingMethod = typeof targetClass[property] === "function";
    if (!isCallingMethod) return targetClass[property];

    return function (...args) {
      cb?.(property);
      targetClass[property].apply(targetClass, args);
    };
  };

  const set = (targetClass, property, value) => {
    cb?.(property);
    targetClass[property] = value;
  };

  return new Proxy(targetClass, {
    get,
    set
  });
}
