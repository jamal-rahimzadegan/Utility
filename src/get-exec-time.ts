type Params = [fn: Function, label: string];

export default function getExecTime(...params: Params) {
	const [fn, label] = params;

	if (!fn || !label) return console.error("Pass correct params");

	console.time(label);
	fn();
	console.timeEnd(label);
}
