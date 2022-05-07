// for one level object or array use `the spread operator` and not his function. eg -> obj={ name : "" }
// use this function for nested objects and arrays. eg -> obj1 = { obj2 : {...} }

type DataType = { [key: string]: any };

export default function copyDeep(obj: DataType): DataType {
	const copiedObj = new (obj as any).constructor();
	const keys = Object.keys(obj);
	keys.forEach((key) => (copiedObj[key] = obj[key]));
	return copiedObj;
}
