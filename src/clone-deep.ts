enum Methods {
  arr = 'arr',
  obj = 'obj',
}

// for on level object or array use ... not his function <-- obj={name:""}
// use this function for nested objects and arrays like <-- obj1={obj2:{...}}
export default function cloneDeep<T>(method: keyof typeof Methods, data: T): T {
  switch (method) {
    case Methods.arr:
      // @ts-ignore
      return data.map((el) => ({ ...el }));
    case Methods.obj:
      return JSON.parse(JSON.stringify(data));
    default:
      return data;
  }
}
