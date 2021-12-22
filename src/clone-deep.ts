enum TARGET_TYPE {
  arr = 'arr',
  obj = 'obj',
}

type DataType = { [key: string]: any } | unknown[];

// for one level object or array use `the spread operator` and not his function. eg -> obj={ name : "" }
// use this function for nested objects and arrays. eg -> obj1 = { obj2 : {...} }
export default function cloneDeep(targetType: keyof typeof TARGET_TYPE, data: DataType): DataType {
  switch (targetType) {
    case TARGET_TYPE.arr:
      return data.map((el) => ({ ...el }));
    case TARGET_TYPE.obj:
      return JSON.parse(JSON.stringify(data));
    default:
      return data;
  }
}
