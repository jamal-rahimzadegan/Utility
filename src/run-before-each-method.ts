
 1- Utility to `call a function` before each class method 
 2- We are working with getters and setters
 3- Requires a Class and a Callback (as params)
 4- It will returns a proxy (which wraps the original class)
 5- Usage: (in the last line of the constructor)
 `return runBeforeEachMethod(this, this.METHOD_TO_CALL_BEFORE_ALL.bind(this))`
  */

function handleGet(target: object, prop: string, cb: Function) {
  const targetProp = (target as any)[prop]
  const isMethod = typeof targetProp === 'function'

  if (!isMethod) return targetProp

  return (...args: any[]) => {
    cb?.()
    return targetProp.apply(target, args)
  }
}

function handleSet(target: object, prop: string, newValue: any, cb: Function) {
  cb?.()
  ;(target as any)[prop] = newValue
}

export function runBeforeEachMethod<T>(targetClass: object, cb: Function): T {
  return new Proxy(targetClass, {
    get: (target: object, prop: string) => handleGet(target, prop, cb),
    set: (target: object, prop: string, newValue: any): boolean => {
      handleSet(target, prop, newValue, cb)
      return true
    },
  }) as T
}
