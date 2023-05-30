
 1- Utility to `call a function` before each class method 
 2- We are working with getters and setters
 3- Requires a Class and a Callback (as params)
 4- It will returns a proxy (which wraps the original class)
 5- Usage: (in the last line of the constructor)
 `return runBeforeEachMethod(this, this.METHOD_TO_CALL_BEFORE_ALL.bind(this))`
  */

type ClassType = Record<any, any>
type ProxyReturnType = <T>(target: object, cb: Function) => T

function handleProxy(): ProxyReturnType {
  const proxySet = (
    targetClass: ClassType,
    property: string,
    newValue: any,
    cb: Function,
  ) => {
    cb?.(property)
    targetClass[property] = newValue
  }

  const proxyGet = (
    targetClass: ClassType,
    property: string,
    cb: Function,
  ): any => {
    const targetProperty = targetClass[property]

    const isMethod = typeof targetProperty === 'function'
    if (!isMethod) return targetProperty

    return function (...args: any[]) {
      cb?.(property)
      targetProperty.apply(targetClass, args)
    }
  }

  return <T>(target: object, cb: Function) => {
    return new Proxy(target, {
      get: (classObj, property) => proxyGet(classObj, property as string, cb),
      set: (classObj, property, newValue): any => {
        proxySet(classObj, property as string, newValue, cb)
      },
    }) as T
  }
}

export const runBeforeEachClassMethod = handleProxy()
