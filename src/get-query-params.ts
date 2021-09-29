export default function getQueryParams(search: string) {
  try {
    const params = search.substring(1);
    return JSON.parse(
      '{"' +
        decodeURI(params)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
  } catch (e) {
    console.log(`--- e in getting query ----> `, e);
  }
}
