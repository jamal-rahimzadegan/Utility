// for one level object or array use `the spread operator` and not his function. eg -> obj={ name : "" }
// use this function for nested objects and arrays. eg -> obj1 = { obj2 : {...} }

type Param = {} | any[]

export default function cloneDeep(param: Param): Param {
  if (!param) return param

  if (Array.isArray(param)) return param.map((item) => item)

  const clonedObj = new (param as any).constructor()
  const paramKeys = Object.keys(param)
  paramKeys.forEach((key) => (clonedObj[key] = param[key]))

  return clonedObj
}
