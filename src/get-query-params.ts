export default function getQueryParams(search: string):{ [key: string]: string } {
	if (!search) return {};

	let queries = {};
	new URLSearchParams(search).forEach((value: string, key: string) => {
		queries[key] = value;
	});

	return queries;
}
