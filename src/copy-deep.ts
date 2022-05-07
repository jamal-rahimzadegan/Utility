// for one level object or array use `the spread operator` and not his function. eg -> obj={ name : "" }
// use this function for nested objects and arrays. eg -> obj1 = { obj2 : {...} }

type DataType = { [key: string]: any } | any[];

export default function copyDeep(value: DataType): DataType {
	if (!value) return value;
	if (Array.isArray(value)) return value.map((item) => item);
	else {
		const copiedObj = new (value as any).constructor();
		const keys = Object.keys(value);
		keys.forEach((key) => (copiedObj[key] = value[key]));
		return copiedObj;
	}
}
